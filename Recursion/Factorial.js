
//5 er factorial : 1*2*3*4*5 = 120

function factorial(n) {
    // Base case
    if (n === 0 || n === 1) {
        return 1;
    }
    // Recursive case
    return n * factorial(n - 1);
}

console.log(factorial(5)); // 120

// Base case: factorial n যদি 0 বা 1 হয়, সরাসরি 1 রিটার্ন করে

// how it works:    return n * factorial(n - 1);
//5 * 4 ( again call function and decrease by 1 and so on )
//5 * 4 * 3
//5 * 4 * 3 * 2
//5 * 4 * 3 * 2 * 1
