const target = 10;
let currentValue = 0;

// Simple
// while (currentValue < target) {
//     console.log(currentValue)
//     currentValue++;
// } // output: 0123456789

// with break ( when break condition satisfied then loop will stop and back so don't go next line)
while (currentValue < target) {
    if(currentValue===6){
        break;
    }
    console.log(currentValue)
    currentValue++;
}  // output: 012345  , here 6 is break condition and loop has stoped here but console log is next line, that is why 6 is not print 
