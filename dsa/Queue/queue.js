// Queue operation (FIFO) ,
// it's 3 operation enqueue, dequeue
// just mind it, for the dequeue or remove element use array shift(),just remove from array front side, because Queue low is FIFO . 
class QueueOperation {
  constructor() {
    // create an empty array representing the queue
    this.queue = [];
  }

  // add value to the end of the queue
  enqueue(value) {
    this.queue.push(value);
    return this.queue.length;
  }

  // remove value from the front of the queue (FIFO)
  dequeue() {
    if (this.isEmpty()) {
      return "queue is empty";
    } else {
      return this.queue.shift(); // removes first element
    }
  }

  // show the first value without removing it
  front() {
    if (this.isEmpty()) {
      return "queue is empty";
    } else {
      return this.queue[0];
    }
  }

  // show the last value without removing it
  rear() {
    if (this.isEmpty()) {
      return "queue is empty";
    } else {
      return this.queue[this.queue.length - 1];
    }
  }

  // get total number of elements
  totalSize() {
    return this.queue.length;
  }

  // check if queue is empty
  isEmpty() {
    return this.queue.length === 0;
  }

  // clear all elements from queue
  clear() {
    if (this.isEmpty()) {
      return "queue is already empty, no need to clear";
    } else {
      this.queue = [];
      return "queue cleared successfully";
    }
  }
}

// Example usage
const myQueue = new QueueOperation();

console.log("Total size:", myQueue.totalSize());
console.log("Enqueue:", myQueue.enqueue(10));
console.log("Enqueue:", myQueue.enqueue(20));
console.log("Enqueue:", myQueue.enqueue(30));
console.log("Front value:", myQueue.front());
console.log("Rear value:", myQueue.rear());
console.log("Total size:", myQueue.totalSize());
console.log("Dequeue:", myQueue.dequeue());
console.log("Total size:", myQueue.totalSize());
console.log(myQueue.clear());
