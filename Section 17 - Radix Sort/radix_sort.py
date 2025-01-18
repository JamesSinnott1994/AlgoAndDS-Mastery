import math

def get_digit(num, i):
    """Return the digit at position `i` in the number `num`."""
    return (abs(num) // (10 ** i)) % 10

def digit_count(num):
    """Return the number of digits in `num`."""
    if num == 0:
        return 1
    return math.floor(math.log10(abs(num))) + 1

def most_digits(nums):
    """Return the maximum number of digits in the numbers from the list `nums`."""
    max_digits = 0
    for num in nums:
        max_digits = max(max_digits, digit_count(num))
    return max_digits

def radix_sort(nums):
    """Perform radix sort on the list `nums`."""
    max_digit_count = most_digits(nums)
    for k in range(max_digit_count):
        # Create buckets for each digit (0 through 9)
        digit_buckets = [[] for _ in range(10)]
        for num in nums:
            digit = get_digit(num, k)
            digit_buckets[digit].append(num)
        # Flatten the list of buckets into a single list
        nums = [item for bucket in digit_buckets for item in bucket]
    return nums

# Example usage
print(radix_sort([23, 345, 5467, 12, 2345, 9852]))