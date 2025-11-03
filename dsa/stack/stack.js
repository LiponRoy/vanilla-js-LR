// stack operation (LIFO) ,
// it's 3 operation push,pop,pick, pick means show top most element
// just mind it, for the stack remove element use pop() because stack low is LIFO 
class StackOperation {
  constructor() {
    // created empty array represent for empty stack
    this.stack = [];
  }

  // push value to stack
  pushValue(val) {
    return this.stack.push(val);
  }

  // remove value from stack (LIFO) (if stack not empty)
  popValue() {
    if (this.isEmpty()) {
      return "stack is empty";
    } else {
      return this.stack.pop();
    }
  }

  // show top most value from stack (if stack not empty)
  pickValue() {
    if (this.isEmpty()) {
      return "stack is empty";
    } else {
      return this.stack[this.stack.length - 1];
    }
  }

  // current size of stack
  totalSize() {
    return this.stack.length;
  }

  // is stack empty or not
  isEmpty() {
    return this.stack.length === 0; // ✅ added return
  }

  // Optional: Clear stack
  clear() {
    if (this.isEmpty()) {
      return "stack is already empty, no need to clear";
    } else {
      this.stack = [];
      return "stack cleared successfully"; // 
    }
  }
}

const myStack = new StackOperation();

console.log("Total size", myStack.totalSize());
console.log("added value", myStack.pushValue(10));
console.log("added value", myStack.pushValue(20));
console.log("added value", myStack.pushValue(30));
console.log("Total size", myStack.totalSize());
console.log("remove value", myStack.popValue());
console.log("Total size", myStack.totalSize());
console.log(myStack.clear());
