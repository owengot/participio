(function () {

	// plugin options for each word
	var options = { // word 2
			size: 120,
			weight: 12,
			color: '#fff',
			duration: 1.2,
			fade: 1,
			delay: 0.2,
			fade: 1,
			easing: d3_ease.easeBounceOut.ease

			// size: 120,
			//weight: 10,
			//color: '#fff',
			//duration: .62,
			//fade: 1,
			//delay: 0.1,
			//easing: d3_ease.easeSinInOut.ease
		},
		// items (li)
		logo = document.querySelectorAll('.logo');

	function init() {

		logo.forEach(function (item, pos) {
			var word = item.querySelector('.logo h3')
			// initialize the plugin
			instance = new Letters(word, options),
				endPlayCallback = function () {};

			// show word

			instance.show({
				callback: endPlayCallback
			});

		});
	}

	init();

})();