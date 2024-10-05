function validAnagram(word1, word2){
  // add whatever parameters you deem necessary - good luck!
  
  if (word1.length !== word2.length) {
      return false;
  }
  
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  
  for (let character of word1) {
      frequencyCounter1[character] = (frequencyCounter1[character] || 0) + 1;
  }
  
  for (let character of word2) {
      frequencyCounter2[character] = (frequencyCounter2[character] || 0) + 1;
  }

  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  
  for (let letter in frequencyCounter1) {
      
      if (frequencyCounter1[letter] !== frequencyCounter2[letter]) {
          	return false;
      }
      
  }
  
  return true;
  
}

console.log(validAnagram('', '')); // true
console.log(validAnagram('aaz', 'zza')); // false
console.log(validAnagram('anagram', 'nagaram')); // true
console.log(validAnagram('rat', 'car')); // false
console.log(validAnagram('awesome', 'awesom')); // false
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')); // false
console.log(validAnagram('qwerty', 'qeywrt')); // true
console.log(validAnagram('texttwisttime', 'timetwisttext')); // true