//a closure gives you access to an outer function's scope from an inner function. more clear concepts

// Counter using Closure


function createCounter() {
    let count = 0;
    return function() {
        // Here using outer function variable from inner function
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
