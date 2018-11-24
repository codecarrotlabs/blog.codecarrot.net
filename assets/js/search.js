;(function() {
	function getQueryVariable(variable) {
		var query = window.location.search.substring(1)
		var vars = query.split('&')

		for (var i = 0; i < vars.length; i++) {
			var pair = vars[i].split('=')

			if (pair[0] === variable) {
				return decodeURIComponent(pair[1].replace(/\+/g, '%20'))
			}
		}
	}

	var searchTerm = getQueryVariable('query')

	if (searchTerm) {
		document
			.getElementById('search-field-form-input')
			.setAttribute('value', searchTerm)
		var idx = lunr(function() {
			this.field('id')
			this.field('image')
			this.field('title', { boost: 10 })
			this.field('description')
			this.field('url')
			for (var key in window.store) {
				// Add the data to lunr
				this.add({
					id: key,
					title: window.store[key].title,
					description: window.store[key].description,
					url: window.store[key].url
				})
			}
		})
		var results = idx.search(searchTerm) // Get lunr to perform a search
		displaySearchResults(results, window.store) // We'll write this in the next section
	}

	function displaySearchResults(results, store) {
		var searchResults = document.getElementById('search-results')
		var noResults = document.getElementById('no-result')
		if (results.length) {
			// Are there any results?
			var appendString = ''
			for (var i = 0; i < results.length; i++) {
				// Iterate over the results
				var item = store[results[i].ref]
				appendString +=
					'<li class="card"><a class="card-image" style="background-image: url(' +
					item.image +
					')" href="' +
					item.url +
					'"></a><div class="card-content"><div class="card-category">' +
					item.category +
					'</div><a class="h4" href="' +
					item.url +
					'">' +
					item.title.substr(0, 57) +
					'...</a><p>' +
					item.description.substr(0, 120) +
					'</p></div></li>'
			}
			searchResults.innerHTML = appendString
		} else {
			searchResults.style.display = 'none'
			noResults.innerHTML = 'No results found'
		}
	}
})()

function resetFormField() {
	console.log('I am clicking on it.')
	document.getElementById('search-field-form-reset-icon').onclick = () => {
		var searchTerm = document.getElementById('search-field-form-input').value
		searchTerm = ''
	}
}
