// Time complexity: O(n)
function same(arr1, arr2) {

	if(arr1.length !== arr2.length) {
		return false;
	}

	// Counts the frequencies of individual values in the arrays
	// Quicker to access data in objects
	let frequencyCounter1 = {};
	let frequencyCounter2 = {};

	// One iteration over each array for constructing these objects
	// Two for loops is a better than a for loop and a nested for loop
		// Two loops have 1000 + 1000 loops for examples
		// With nested loop you have 1,000,000 loops!

	for (let val of arr1) {
		frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
	}

	for (let val of arr2) {
		frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
	}

	// If we have 2 as a key in frequencyCounter1 and it appears twice,
	// that means 4 should appear twice in frequencyCounter2!
	for (let key in frequencyCounter1) {

		// Check if the current key sqaured is a key in frequencyCounter2
		if (!(key ** 2 in frequencyCounter2)) {
			return false;
		}

		// Check if the values correspond
		if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
			return false;
		}
	}
	console.log(frequencyCounter1);
	console.log(frequencyCounter2);
	return true;
}

console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));