function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6)); // 8


// What is Fibonacci?
// 0, 1, 1, 2, 3, 5, 8, 13, 21 ...
// Each number is the sum of the previous two numbers.

//So:

// fibonacci(0) = 0

// fibonacci(1) = 1

// fibonacci(2) = 1

// fibonacci(3) = 2

// fibonacci(4) = 3

// fibonacci(5) = 5

// fibonacci(6) = 8

// 🔹 How the function works
// Base cases

// If n === 0 → return 0

// If n === 1 → return 1

// This stops the recursion.

// Recursive case

// Otherwise, it does:

// fibonacci(n) = fibonacci(n - 1) + fibonacci(n - 2)


// (Sum of the previous two results)

// 🔹 Step-by-step for fibonacci(6)

// fibonacci(6)
// = fibonacci(5) + fibonacci(4)

// fibonacci(5)
// = fibonacci(4) + fibonacci(3)

// fibonacci(4)
// = fibonacci(3) + fibonacci(2)

// fibonacci(3)
// = fibonacci(2) + fibonacci(1)

// fibonacci(2)
// = fibonacci(1) + fibonacci(0)
// = 1 + 0 = 1

// Now substitute results back:

// fibonacci(2) = 1

// fibonacci(3) = 1 + 1 = 2

// fibonacci(4) = 2 + 1 = 3

// fibonacci(5) = 3 + 2 = 5

// fibonacci(6) = 5 + 3 = 8 ✅