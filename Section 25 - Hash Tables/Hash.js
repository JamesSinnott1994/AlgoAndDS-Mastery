function hash(key, arrayLen) {
    let total = 0;
    for (let char of key) { // LINEAR TIME HERE
      // map "a" to 1, "b" to 2, "c" to 3, etc.
      let value = char.charCodeAt(0) - 96

      // Use a modulos of the array length to make sure
      // our hash value is placed within the array indices
      // bound
      total = (total + value) % arrayLen;
    }
    return total;
  }

// Need to use a prime number for the array length
function improvedHash(key, arrayLen) {
    let total = 0;
    let WEIRD_PRIME = 31; // Prime numbers have less collisions...(See Word Doc)

    // Add in a minimum
    // If key is a million characters, just do 100 (Not a perfect solution)
    // Just want this to be as fast as possible
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96
        total = (total * WEIRD_PRIME + value) % arrayLen;
    }
    return total;
}