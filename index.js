fi = (function () {
	return {
		libraryMethod: function () {
			return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
		},

		each: function (collection, callback) {
			if (collection instanceof Object && collection instanceof Array) {
				for (let i = 0; i < collection.length; i++) {
					callback(collection[i])
				}
			} else if (collection instanceof Object && !(collection instanceof Array)) {
				for (let item in collection) {
					callback(collection[item])
				}
			}
			return collection
		},

		map: function (collection, callback) {
			const mappedArray = []
			for (let key in collection) {
				mappedArray.push(callback(collection[key]))
			}
			return mappedArray
		},

		reduce: function (array, combine, acc = 0) {
			let current = acc;
			// console.log(current)
			for (let element of array) {
				current = combine(current, element);
				// console.log(current)
			}
			return current;
		},
		cmp: (a, b) => {
			return a - b;
		},

		find: function (list, value) {
			
		},
		functions: function () {

		},


	}
})()

fi.libraryMethod()
