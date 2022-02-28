// Sum with Recursion Again Ended
// Description

// You are given an array and you have to find the sum of the absolute difference between consecutive elements of the array.

// For instance, if the array is 3,5,6,1,8

// Absolute of (3-5) = 2

// Absolute of (5-6) = 1

// Absolute of (6-1) = 5

// Absolute of (1-8) = 7

// ------------------------

// Sum of all absolute = 15

// ------------------------

// **The only constraint is that you cannot write an iterative code. You have to write a recursive code only


// Input
// Input Format

// There are several test cases. Each test case starts with **t** which is the total number of test cases present

// Each test case has 2 lines:

// Line 1 : Number of integers present in the array

// Line 2 : The integers present in the array

// Constraints

// n <= 10000

// arr[i] <= 15


// Output
// Output one number(the sum) per test case


// Sample Input 1 

// 2
// 3
// 1 5 2
// 5
// 3 5 6 1 8
// Sample Output 1

// 7
// 15







function runProgram(input) {
    input = input.trim().split("\n")
    var tc = input[0]
    var line = 1
    for(var i = 0;i<tc;i++){
        var n = input[line]
        line++
      var arr = input[line].split(" ").map(Number)
      line++
    //   sum(n,arr)
      console.log(sum(n-1,arr))
    }
  
}
function sum(n,arr){
    if(n==0)
        return 0
    return sum(n-1,arr)+Math.abs(arr[n-1]-arr[n])
    
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