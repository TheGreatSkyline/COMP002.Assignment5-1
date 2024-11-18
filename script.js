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
  // Define the reliableMultiply function with parameters a and b
  while (true) { 
    // Create an infinite loop
    try { 
      // Attempt to execute the following block of code
      return primitiveMultiply(a, b); 
      // Return the result of primitiveMultiply(a, b) if successful
    } catch (e) { 
      // Catch any exceptions thrown in the try block
      if (!(e instanceof MultiplicatorUnitFailure)) { 
        // Check if the caught exception is NOT of type MultiplicatorUnitFailure
        throw e;
         // Re-throw the exception if it's not the expected type
      }
      // If the exception is of type MultiplicatorUnitFailure, continue the loop to retry
    }
  }
}

function handleException(e) { 
  // Define the handleException function with parameter e (the error)
  // Verify if the error is not an instance of MultiplicatorUnitFailure
  if (!(e instanceof MultiplicatorUnitFailure)) {
      throw e; 
      // Re-throw the error if it is not a MultiplicatorUnitFailure
  }
  // If the error is a MultiplicatorUnitFailure, proceed without interruption (continue the calling function's operation)
}

// Example usage
console.log(reliableMultiply(8, 8)); // Outputs: 64 (may take several attempts)
