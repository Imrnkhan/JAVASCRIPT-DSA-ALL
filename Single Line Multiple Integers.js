// Single Line Multiple Integers -19727:15:14
// Description

// Single Line Multiple Integers


// Input
// The first and the only line of the input contains the 4 integers, given as input


// Output
// Print each integer given as input, on a new line as output by adding 1 to it


// Sample Input 1 

// 1 2 3 4
// Sample Output 1

// 2
// 3
// 4
// 5





//Enter code here
function runProgram(input) {
    // Write code here
    input = input.split(" ").map(Number)
    array(input)
  }
  function array(input){
      for(var i = 0; i < input.length; i++){
          
      console.log(input[i] + 1 )
      }
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