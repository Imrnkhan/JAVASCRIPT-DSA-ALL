// Take out maximum Ended
// Description

// Given an array of integers and a number k, find the maximum sum of a subarray of size k.


// Input
// Input Format

// First line consists of two integers n and k separated by space

// Second line consists of n integers separated by spaces.

// Constraints

// 1 <= n <= 10^7

// 1 <= k <= 10^6


// Output
// Print the maximum sum of a subarray of size k.


// Sample Input 1 

// 10 3
// -1 -1 -2 1 -2 4 1 9 3 9
// Sample Output 1

// 21






function runProgram(input) {
    // Write code here
    input = input.split("\n")
    var [m,k] = input[0].split(" ").map(Number)
    var arr = input[1].split(" ").map(Number)
    array(m,k,arr)
  }
  
  function array(m,k,arr){
      var a = 0;
      var b = 0;
      for(var i = 0; i < k; i++){
          a += arr[i]
      }
      b = Math.max(b,a);
      for(var j = k; j < m; j++){
          a += arr[j]
          a -= arr[j-k]
          b = Math.max(b,a)
      }
      console.log(b)
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