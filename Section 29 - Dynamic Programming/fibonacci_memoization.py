# Demonstration below of Dynamic Programming with Memoization
def fibonacci(n, memo=None):

    # Previous answer stored in memo
    # Answer for 3rd number will be stored in memo, etc
    if memo is None: memo = {}
    if(n in memo): return memo[n] # Short-circuit: We already found this so return it
    if n <= 2: return 1
    res = fibonacci(n-1, memo) + fibonacci(n-2, memo)
    memo[n] = res # Store result
    return res

n = 5
print("*********")
print(fibonacci(n))