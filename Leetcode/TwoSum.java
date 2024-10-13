public class TwoSum {
    public static int[] twoSum(int[] nums, int target) {
        
        // Create an array to store the two indices
        // Iterate through nums
            // If current index plus next index in loop is equal to target
                // Add indices to array to be returned
                // Break loop
        // Return array

        int[] summedIndicies = new int[2];

        for (int i = 0; i < nums.length; i++) {
            for (int j = i+1; j < nums.length; j++) {
                if (nums[i] + nums[j] == target) {
                    summedIndicies[0] = i;
                    summedIndicies[1] = j;
                    break;
                }
            }
        }

        return summedIndicies;
    }

    public static void main(String[] args) {

        int[] nums = {2, 7, 11, 15};
        int target = 9;

        System.out.println(twoSum(nums, target));
    }
}

// Return the indices of two numbers in the array, such that those numbers add up to the target