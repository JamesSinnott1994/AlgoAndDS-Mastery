function search(array, val) {

  // Time Complexity - Log(N) - Binary Search

  let min = 0;
  let max = array.length - 1;

  while (min <= max) {

    let middle = Math.floor((min + max) / 2);
    let currentElement = array[middle];

    if (array[middle] < val) {
      min = middle + 1;
    } else if (array[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;

}