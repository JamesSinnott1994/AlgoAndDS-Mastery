
def fibonacci(n):
    if n <= 2: return 1
    return fibonacci(n-1) + fibonacci(n-2)

n = 40
print("*********")
print(fibonacci(n))
print("*********")
