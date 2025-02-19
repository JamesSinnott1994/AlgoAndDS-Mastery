// Using an array with push and pop
var stack = [];
stack.push("google");
stack.push("instagram");
stack.push("youtube");
stack.pop(); // Removes from the end

// Using an array with unshift and shift
var stack = [];
stack.unshift("google");
stack.unshift("instagram");
stack.unshift("youtube");
stack.shift(); // Removes from the beginning

// Adding/Removing from the beginning is not good, as we have to
// re-index every item down

// Push and Pop are the better options