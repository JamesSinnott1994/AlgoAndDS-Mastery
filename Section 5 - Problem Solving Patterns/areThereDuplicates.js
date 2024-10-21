function areThereDuplicates(...args) {
    
    // Sort the arguments to have similar values together
    // Two pointer variables (pointers) for comparison
        // If first pointer equal second pointer
            // return true
        // else
            // advance pointers until completion
            
    args.sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    });
    
    let start = 0;
    let next = 1;
    
    while (next < args.length) {
        if (args[start] === args[next]) {
            return true;
            
        }
        start++;
        next++;
    }
    return false;
}

console.log("Duplicates: " + areThereDuplicates(1, 2, 3));