/*

Multiple Pointers - countUniqueValues
Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. 
There can be negative numbers in the array, but it will always be sorted.

countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4

Time Complexity - O(n)

Space Complexity - O(n)

Bonus

You must do this with constant or O(1) space and O(n) time.

*/

// Count unique values using an approach without creating another variable to keep track of the values
// Move from direction to the other using two pointers

function countUniqueValues(arr){
    
    // Linear Time as we are only looping once
    if (arr.length === 0) return 0;
    
    var i = 0;
    for (var j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++; // Move i on if not equal
            arr[i] = arr[j];
        }
    }
    return i+1;
    
}

console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])); // 7