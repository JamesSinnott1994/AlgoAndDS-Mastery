function addUpTo(n) {
	// Mathematical formula, less inuitive but more efficient
	return n * (n + 1) / 2;
}

var t1 = performance.now();
addUpTo(1000000000); // 1 Billion
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);





















