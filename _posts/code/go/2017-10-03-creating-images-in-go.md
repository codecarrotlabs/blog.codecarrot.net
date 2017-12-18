---
layout: post
author: yashumittal
title: Creating Images in Go
date: 2017-10-03 02:02:00 +0530
categories: code
tags: go coding images
description: Go has a built-in image package, that allows to easily create images, and save them as files on the disk.
image: create-image-in-golang.png
---

This post is continuation of [Vector Operations in Go](/vector-operations-in-go).

## Foreword

Before moving forward with implementing a camera model, it would be good to have some sort of debugging tool. When writing a ray tracer, that tool is a rendered image.

Go has a built-in [image](//golang.org/pkg/image/) package, that allows to easily create images, and save them as files on the disk.

## Design

The scene will be represented by a struct. Internally it will store the width and height of the desired image, as well as a pointer to an instance of `image.RGBA`.

```go
type Scene struct {
	Width, Height int
	Img           *image.RGBA
}
```

## Initialization

In order to initialize the scene, we need to initialize the `image.RGBA` with the given dimensions. In Go this is done by creating an `image.Rect` struct and passing it to the `image.NewRGBA` function.

The whole code required to initialize the scene will be done in the NewScene function. The function should accept two integers as arguments, that represent the width and height of the image:

```go
func TestNewSceneReturnsANewScene(t *testing.T) {
	scene := NewScene(4, 4)
	rect := image.Rect(0, 0, 4, 4)
	assert.Equal(t, 4, scene.Width, "sets width of the scene")
	assert.Equal(t, 4, scene.Height, "sets height of the scene")
	assert.True(t, assert.ObjectsAreEqualValues(rect, scene.Img.Bounds()),
		"creates an image.RGBA with proper bounds")
}

func NewScene(width int, height int) *Scene {
	return &Scene{
		Width:  width,
		Height: height,
		Img:    image.NewRGBA(image.Rect(0, 0, width, height)),
	}
}
```

The assert library exposes some nifty helper functions, like [ObjectsAreEqualValues](//godoc.org/github.com/stretchr/testify/assert#ObjectsAreEqualValues) which does a deep equality check of an object’s values.

## Test helpers

In order to test the following functions, I needed to write two helper functions to generate a new `image.RGBA` and fill the image with a random color:

```go
func generateImage(w, h int, pixelColor color.RGBA) *image.RGBA {
	img := image.NewRGBA(image.Rect(0, 0, 4, 4))
	for x := 0; x < 4; x++ {
		for y := 0; y < 4; y++ {
			img.Set(x, y, pixelColor)
		}
	}
	return img
}

func randomColor() color.RGBA {
	rand := rand.New(rand.NewSource(time.Now().Unix()))
	return color.RGBA{uint8(rand.Intn(255)), uint8(rand.Intn(255)), uint8(rand.Intn(255)), 255}
}
```

I use these helpers to generate expected `image.RGBA` objects for `ObjectsAreEqualValues`.

## Traversing the image

For each pixel of the image, I want to set a specific color. This can be done simply enough by a double for loop, but we can expose a convenience function on `Scene`, called `EachPixel`. Go allows us to specify functions as arguments for other functions. We will leverage this fact by requiring a single argument in `EachPixel` — a function with the following signature `func(int, int) color.RGBA`. The two `int` values are the x and y coordinates of the image (which will be used later on for calculating a pixel in the image plane). The full implementation of the `EachPixel` function looks like this:

```go
func (s *Scene) EachPixel(colorFunction func(int, int) color.RGBA) {
	for x := 0; x < s.Width; x++ {
		for y := 0; y < s.Height; y++ {
			s.setPixel(x, y, colorFunction(x, y))
		}
	}
}

func TestSceneEachPixelSetsEachPixelToTheProvidedFunctionReturn(t *testing.T) {
	scene := NewScene(4, 4)
	c := randomColor()

	scene.EachPixel(func(x, y int) color.RGBA { return c })
	img := generateImage(4, 4, c)
	assert.True(t, assert.ObjectsAreEqualValues(img, scene.Img),
		"sets every pixel of the image to the provided values")
}
```

The `setPixel` function is just an adapter for Go’s built-in `image.RGBA.Set`.

## Saving the image

Finally I want to save the image to a PNG file. As one might suspect, Go provides such a function in the `image/png` package, called `png.Encode`. Again, I’ve built an adapter for this function, that takes a filename, under which it should save the image.

```go
func (s *Scene) Save(filename string) {
	f, err := os.Create(filename)

	if err != nil {
		panic(err)
	}
	defer f.Close()
	png.Encode(f, s.Img)
}

func TestSceneSavePanicsWhenFileCannotBePersisted(t *testing.T) {
	scene := NewScene(4, 4)
	c := randomColor()
	scene.EachPixel(func(x, y int) color.RGBA { return c })
	assert.Panics(t, func() {
		scene.Save("/etc/temp.png")
	}, "panics when the file cannot be persisted")
}
```

Several interesting things happen in this code:

* `os.Create(filename)` — the function has multiple returns; this is a common pattern for [error handling in Go](//blog.golang.org/error-handling-and-go:
	* f — the file descriptor
	* err — any error that may have happened during the file creation, for example insufficient privileges
* `defer f.Close()` — the [defer keyword](//tour.golang.org/flowcontrol/12) delays execution of the passed code until the surrounding function returns; in this case, the file won’t close until the Save function finishes executing it’s commands
* `assert.Panics` — another nice feature of the assert library, instead of taking expected/actual values of the assertion, it takes a function that is supposed to panic (raise an exception), if the function does panic it passes the test; this is similar to RSpec’s `expect { subject }.to raise_error StandardError`.

## Putting it all together

Here’s a simple main function that fills the image with values based on the current pixel:

```go
package main

import (
	"fmt"
	"image/color"
	"time"

	"github.com/szeliga/goray/engine"
)

func main() {
	var width = 200
	var height = 200
	scene := engine.NewScene(width, height)
	scene.EachPixel(func(x, y int) color.RGBA {
		return color.RGBA{
			uint8(x * 255 / width),
			uint8(y * 255 / height),
			100,
			255,
		}
	})
	scene.Save(fmt.Sprintf("./renders/%d.png", time.Now().Unix()))
}
```

## This code produces the following image:

![Image produced by the code execuated by go](//cdn.codecarrot.net/images/167567322689978.png)

That’s all regarding creating and saving images in Go. Next up, a basic camera model, stay tuned.
