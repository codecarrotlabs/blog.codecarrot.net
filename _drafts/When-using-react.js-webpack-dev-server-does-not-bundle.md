# When using react.js webpack-dev-server does not bundle
https://medium.com/bcgdv-engineering/when-using-react-js-webpack-dev-server-does-not-bundle-c2d340b0a3e8

When using react.js, do you run `webpack-dev-server` and find that when you change your files, webpack-dev-server does not automatically rebundle your project? Instead you find yourself having to run `webpack -d --watch` along with `webpack-dev-server` in order for changes to your files to be visible?

This seems to be a rather common issue, it even has a [bug filed against webpack-dev-server](https://github.com/webpack/webpack-dev-server/issues/24) for this issue and the conversation on that bug report started in 2014 and is still going on to this day.

For the maintainers part, they have repeatedly mentioned on this thread that:


> The webpack-dev-server doesn’t write to disk. It serves the result from memory.

However people don’t seem to get what this means and the thread goes on and on with people reporting a similar issue. If you find yourself on this page because you have a similar problem, read on and hopefully I’ll be able to explain this one.
**When does this happen?**
There are a few ways to start a react project. Two popular ways of creating a react project is:

- You can use the `create-react-app` from the command line. This is the “[Create app with no configuration](https://facebook.github.io/react/blog/2016/07/22/create-apps-with-no-configuration.html)” according to Facebook. Why this is a “no configuration” approach is beyond me, it seems to install a ton of node modules but, at the same time, projects created this way work flawlessly. When you run the app, there is an embedded web server that runs our project, when we edit a file like App.js, the page automatically bundles the JS file and reloads the project.
- You can create a project from a scratch and assemble your react bundle yourself. You may do this because In this scenario, you start by initialising an empty node project, then setup webpack, babel, and then finally setup react. In this scenario, if you don’t setup your project properly, `webpack-dev-server` will not automatically update your project after you change files.

I’m going to help you start a react project and reproduce this problem just so you understand when and why does this happen.
**Setting up a react.js project with this problem**
Note: Before we start, the commands below are very *nix system focused. This is for my convenience but you should be able to use a UI editor to make a lot of the changes.
Lets start by creating our node project:

    mkdir react-sample-broken
    cd react-sample-broken
    npm init

You can accept all the default values when you get the various prompts.
Next, install a configure webpack.

    # install webpack
    npm install webpack --save
    # configure using webpack.config.js
    cat <<EOT >>webpack.config.js
    var webpack = require('webpack');
    var path = require('path');
    var BUILD_DIR = path.resolve(__dirname, 'src/frontend/public');
    var APP_DIR = path.resolve(__dirname, 'src/frontend/app');
    var config = {
      entry: APP_DIR + '/index.jsx',
      output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
      }
    };
    module.exports = config;
    EOT

Now, install and configure babel.

    npm install babel-core babel-loader babel-preset-es2015 babel-preset-react --save
    cat <<EOT >> .babelrc
    {
      "presets" : ["es2015", "react"]
    }
    EOT

Now that we have installed and configured babel, we need to tell webpack to use babel-loader while bundling the files. Edit **webpack.config.js** and add a module section to it.

    var webpack = require('webpack');
    var path = require('path');
    var BUILD_DIR = path.resolve(__dirname, 'src/frontend/public');
    var APP_DIR = path.resolve(__dirname, 'src/frontend/app');
    var config = {
      entry: APP_DIR + '/index.jsx',
      output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
      },
      module : {
        loaders : [
          {
            test : /\.jsx?/,
            include : APP_DIR,
            loader : 'babel-loader'
          }
        ]
      }
    };
    module.exports = config;

Finally, lets install react-dom.

    npm install react react-dom --save

And lets create our first react component, which we will use to output “Hello, world” to our page.

    cat <<EOT >> src/frontend/app/index.jsx
    import React from 'react';
    import {render} from 'react-dom';
    class App extends React.Component {
      render () {
        return <p> Hello, World!</p>;
      }
    }
    render(<App/>, document.getElementById('app'));
    EOT

Next, lets create an `index.html` file that we will use to display our react project. We will put this under our `src/frontend/` directory.

    mkdir -p src/frontend/public
    mkdir -p src/frontend/app
    cat <<EOT >> src/frontend/index.html
    html>
     <head>
     <meta charset="utf-8">
     <title>React.js using NPM, Babel6 and Webpack</title>
     </head>
     <body>
     <div id="app" />
     <script src="public/bundle.js" type="text/javascript"></script>
     </body>
    </html>
    EOT

Your project structure should look something like below:

    ├── package.json
    ├── src
    │ └── frontend
    │ ├── app
    │ │ └── index.jsx
    │ ├── index.html
    │ └── public
    └── webpack.config.js

Lets bundle the app using webpack so we can run it.

    ./node_modules/.bin/webpack -d
    open src/frontend/index.html

This works great! Except, our react app is not being served up from a web-server. There are many reasons why this can be problematic. In order to run it from a web-server, we will install webpack-dev-server. To run this using the webpack-dev-server, first we will install webpack-dev-server.

    npm install webpack-dev-server --dev-install

Now, you can either update your package.json file to use webpack or run it from the command line. I’ll run it from the command line because I just want to demonstrate the issue.

    ./node_modules/.bin/webpack-dev-server --content-base=src/frontend

If we visit `[http://localhost:8080](http://localhost:8080/)` you will see a “Hello, World!” message. The problem though is, that if you open `index.jsx`and make any changes to it, you’ll notice that the webpack-dev-server detects the changes, bundles and restarts, however, *you don’t see the changes when you refresh the page*.
**Side note**: if you don’t want to run the complex commands above, you can configure your **package.json** file to run these for you.

    {
    //code
      "scripts": {
        "devNoServererver": "webpack --d --watch",
        "dev": "webpack-dev-server",
        "build": "webpack -p",
        "test": "echo \"Error: no test specified\" && exit 1"
      },
    //code
    }

Now, you can run these with `npm run dev` or `npm run devNoServer` or `npm run build`.
**So, why does webpack-dev-server not build?**
As I already mentioned, this has to be with the structure of your project not being setup properly for webpack. You see, in project that are rolled themselves, there often is a hard coded link to bundle.js in a webpage. If you look at the timestamp on bundle.js, you’ll notice that bundle.js is not being updated. However, webpack-dev-server is doing something, so what is it?
As the maintainers on the bug report mentioned above kept saying. Webpack-dev-server serves up the project from in-memory and not from disk. This means that webpac-dev-server has a copy of everything in memory, including the updated `bundle.js` file and that’s where it’s serving up the page from. So, if there is an updated copy in memory, why doesn’t this work?
In order to diagnose this issue, visit: `[http://localhost:8080/webpack-dev-server](http://localhost:8080/webpack-dev-server)` and you’ll see the project structure according to webpack-dev-server.

![](https://cdn-images-1.medium.com/max/800/1*Y3oFUSfm9_2ae6miXzXw1Q.png)


If your setup is like mine, you’ll notice that your package structure is rather flat, and your bundle.js file reside in the root directory and not in the `public/`directory like we had configured in `index.html`. You can go back to index.html and change the script tag to include from `./bundle.js` and you’ll see that things start to work as expected when you start the webpack-dev-server. So, the issue is clear, the project structure that webpack understands, is not what we had configured, or thought we had configured!

    <!-- in index.html change shown -->
    <!-- old --><script src="public/bundle.js" type=”text/javascript”></script>
    <!-- new --><script src="bundle.js" type=”text/javascript”></script>

But wait, the issue is not closed just yet. We can’t leave the script tag pointing to `./bundle.js` either because when you bundle for production, our `bundle.js` is placed in the `public/` directory and not in the same directory as `index.html`. So, this is fixed in dev, but it’s broken in production! Not a good idea!
**Fixing the issue**
In order to fix the issue, we have to restructure our project. One of the things I absolutely hate about the current structure of the project is that we have to tell webpack-dev-server to service up the `/src/frontend` directory instead of just the `/src/frontend/public` directory. I hate this because anyone who types `/app` as the path in the URL can potentially see our source. So, I’m going to move `index.html` inside the `public/` directory and move `bundle.js`in to `public/js` directory and then in my `index.html` file, point to `js/bundle.js`.
So now, our project structure is as follows:

    ├── package.json
    ├── src
    │   └── frontend
    │       ├── app
    │       │   └── index.jsx
    │       └── public
    │           ├── index.html
    │           └── js
    │               └── bundle.js
    └── webpack.config.js

and `index.html` looks like this:

    <html>
     <head>
     <meta charset="utf-8">
     <title>React.js using NPM, Babel6 and Webpack</title>
     </head>
     <body>
     <div id="app" />
     <script src="js/bundle.js" type="text/javascript"></script>
     </body>
    </html>

I `webpack.config.js` file. We have to point our `bundle.js` file to the `js/`directory. Note, don’t change the output path, instead prepend “js” to “bundle.js”. What I’ve noticed is that the output directory acts as the base directory for the webpack-dev-server. This is different from the `base-content`path that we pass the `webpack-dev-server` which is meant to tell webpack-dev-server where our static assets are located.

    //webpack.config.js
    var webpack = require('webpack');
    var path = require('path');
    var BUILD_DIR = path.resolve(__dirname, 'src/frontend/public');
    var APP_DIR = path.resolve(__dirname, 'src/frontend/app');
    var config = {
      entry: APP_DIR + '/index.jsx',
      output: {
        path: BUILD_DIR,
        filename: 'js/bundle.js'
      },
      module : {
        loaders : [
          {
            test : /\.jsx?/,
            include : APP_DIR,
            loader : 'babel-loader'
          }
        ]
      }
    };
    module.exports = config;

Then, finally in `package.json` we have to tell `webpack-dev-server` that our content base is the public directory.

    {
      "name": "react-sample-broken",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "devNoServer": "webpack --d --watch",
        "dev": "webpack-dev-server --content-base=src/frontend/public",
        "build": "webpack -p",
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "author": "",
      "license": "ISC",
      "dependencies": {
        "babel-core": "^6.25.0",
        "babel-loader": "^7.1.1",
        "babel-preset-es2015": "^6.24.1",
        "babel-preset-react": "^6.24.1",
        "react": "^15.6.1",
        "react-dom": "^15.6.1",
        "webpack": "^3.1.0"
      }
    }

Now, if you restart the webpack-dev-server, you’ll notice that the project structure is different. For good measure, bundle using webpack first:

    ./node_modules/.bin/webpack -d
    ./node_modules/.bin/webpack-dev-server --content-base=src/frontend/public
    # or if you setup package.json run webpack
    ./node_modules/.bin/webpack -d
    npm run dev

Now, when you visit `[http://localhost:8080/webpack-dev-server](http://localhost:8080/webpack-dev-server)` you should see a structure closer to what you expect.

![](https://cdn-images-1.medium.com/max/800/1*kC5TpAb6TdTATQkeSxr_wQ.png)


Now, go back to `[http://localhost:8080](http://localhost:8080/)` and you should see “Hello, World!”. This is being rendered from `index.jsx`. If you keep localhost:8080 open and edit index.jsx, you should notice that the webpage automatically reloads to reflect the changes (works in Chrome and Firefox). Keeping your browser open, run this command (if you are in a Linux box) and you should see the webpages automatically update.

    cat <<EOT > src/frontend/app/index.jsx
    import React from 'react';
    import {render} from 'react-dom';
    class App extends React.Component {
      render () {
        return <p>Hello, Ali!</p>;
      }
    }
    render(<App/>, document.getElementById('app'));
    EOT

That it! The problem from the start was nothing but the project structure. Hope this helps someone.
**Finally**
The project in its [broken](https://github.com/alphamu/reactjs-webpack-bundle-not-working-demo/tree/broken) and [fixed](https://github.com/alphamu/reactjs-webpack-bundle-not-working-demo/tree/fixed) form is [hosted on my GitHub](https://github.com/alphamu/reactjs-webpack-bundle-not-working-demo). You should be able to check it out and run it with:

    //If you have yarn:
    yarn install
    npm run dev
    //Else, the long way
    npm init
    npm install webpack --save
    npm install babel-core babel-loader babel-preset-es2015 babel-preset-react --save
    npm install react react-dom --save
    npm install webpack-dev-server --dev-install
    ./node_modules/.bin/webpack -d
    npm run dev

Yay! you made it to the end! We should hang out! feel free to follow me on Medium, [LinkedIn](https://www.linkedin.com/in/alimuzaffar), [Google+](https://plus.google.com/+AliMuzaffar) or [Twitter](https://twitter.com/ali_muzaffar).

