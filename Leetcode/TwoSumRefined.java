public class TwoSumRefined {
    public static int[] twoSum(int[] nums, int target) {
        // Create a HashMap to store the value and its corresponding index
        HashMap<Integer, Integer> map = new HashMap<>();
        
        // Iterate through the array
        for (int i = 0; i < nums.length; i++) {
            // Calculate the complement of the current element
            int complement = target - nums[i];
            
            // If the complement exists in the map, return the indices
            if (map.containsKey(complement)) {
                return new int[] { map.get(complement), i };
            }
            
            // Otherwise, add the current element to the map
            map.put(nums[i], i);
        }
        
        // In case no solution is found, which shouldn't happen given the problem statement
        throw new IllegalArgumentException("No two sum solution");
    }

    public static void main(String[] args) {

        int[] nums = {2, 7, 11, 15};
        int target = 9;

        System.out.println(twoSum(nums, target));
    }
}

// Return the indices of two numbers in the array, such that those numbers add up to the target

// Refined to be completed in Linear Time.

/*

To solve the "Two Sum" problem in linear time (O(n)) in Java, you can utilize a hash map to store the difference between 
the target and the current element as you iterate through the array. The hash map allows for efficient lookups (in O(1) time) 
to check if the required complement (the difference) already exists in the map.

Steps:
Iterate through the array.
For each element, calculate the complement (i.e., target - nums[i]).
Check if the complement exists in the hash map.
If it exists, return the indices of the current element and the element that forms the sum.
If it does not exist, add the current element along with its index to the hash map.
Repeat this process until you find the solution.

*/