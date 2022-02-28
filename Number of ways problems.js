// Number of ways problems Ended
// Description

// Sandhya is running up a staircase with N steps, and can hop(jump) either 1 step, 2 steps or 3 steps at a time. You have to count, how many possible ways Sandhya can run up to the stairs.


// Input
// input Format

// Input contains integer N that is number of steps

// Constraints

// N <= 30


// Output
// Output Format

// Output for each integer N the no of possible ways w.


// Sample Input 1 

// 4
// Sample Output 1

// 7
// Hint

// No of the ways for n=4 are:-

// 1 1 1 1

// 1 1 2

// 2 1 1

// 1 2 1

// 1 3

// 3 1

// 2 2







function runProgram(input) {
    var n = +input
    console.log(fact(n))
  }
  function fact(n){
      if(n === 0) {
          return 1;
      }
      if(n < 0) {
          return 0;
      }
      return fact(n-1) + fact(n-2) + fact(n-3)
  }
  
  if (process.env.USER === "") {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
  
  
  