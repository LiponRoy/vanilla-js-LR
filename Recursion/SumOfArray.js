function sumArray(arr) {
    // Base case
    if (arr.length === 0) return 0;
    
    // Recursive case
    return arr[0] + sumArray(arr.slice(1));
}

console.log(sumArray([1, 2, 3, 4, 5])); // 15



// Explanation:

// Take the first element arr[0]

// Add it to the sum of the rest of the array (arr.slice(1))

// Stops when the array is empty.

// arr[0] → first element of the array.

// arr.slice(1) → the rest of the array (without the first element).

// The function adds the first element to the result of calling itself with the rest of the array.


// Step-by-step execution

// Input: [1, 2, 3, 4, 5]

// sumArray([1, 2, 3, 4, 5])
// = 1 + sumArray([2, 3, 4, 5])

// sumArray([2, 3, 4, 5])
// = 2 + sumArray([3, 4, 5])

// sumArray([3, 4, 5])
// = 3 + sumArray([4, 5])

// sumArray([4, 5])
// = 4 + sumArray([5])

// sumArray([5])
// = 5 + sumArray([])

// sumArray([]) → base case hit → returns 0