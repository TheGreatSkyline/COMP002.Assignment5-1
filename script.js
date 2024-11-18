// 1. Say you have a function, primitiveMultiply, that in 20% of cases multiplies two
// numbers and in the other 80% of cases raises an exception of type
// MultiplicatorUnitFailure. Write a function that wraps this clunky function and just
// keeps trying until a call succeeds, after which it returns the result. Make sure you
// handle only the exceptions you are trying to handle.
// Example Output:
// console.log(reliableMultiply(8, 8)); // outputs 64

class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  // Your code here.
}

function reliableMultiply(a, b) { 
  // Define the function reliableMultiply which takes two parameters a and b
  while (true) { 
    // Start an infinite loop
    try { 
      // Begin a try block to attempt the multiplication
      return primitiveMultiply(a, b); 
      // Try to return the result of primitiveMultiply(a, b)
    } catch (e) { 
      // Catch any errors that occur in the try block
      if (!(e instanceof MultiplicatorUnitFailure)) { 
        // Check if the error is NOT an instance of MultiplicatorUnitFailure
        throw e;
         // If it’s not the exception we're handling, re-throw the error
      }
      // If the exception is a MultiplicatorUnitFailure, the loop continues and tries again
    }
  }
}
function handleException(e) { 
  // Define the function handleException which takes one parameter e (the error)
  // Check if the error is not an instance of MultiplicatorUnitFailure
  if (!(e instanceof MultiplicatorUnitFailure)) {
      throw e; 
      // Re-throw the error if it's not the exception we're handling
  }
  // Otherwise, just continue (do nothing here so the calling function can retry)
}



// Example usage
console.log(reliableMultiply(8, 8)); // Outputs: 64 (may take several attempts)
