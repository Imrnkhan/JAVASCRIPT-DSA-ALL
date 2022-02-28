// Factorial-Iterative Ended
// Description

// The factorial of a positive integer N is the product of all positive integers less than or equal to n:

// Given a number N your task is to write a program that calculates factorial of N

// Note: You must not recursion. Use iteration to solve the problem

// *Extra*: The Church-Turing thesis states that what is computable by recursive functions is computable by an iterative model (such as the Turing machine) and vice versa

// So, in this case we want you to write iterative approach to it


// Input
// Input Format

// First and the only line contains N

// Constraints

// N<15


// Output
// Output Format

// Output the factorial value of N


// Sample Input 1 

// 5
// Sample Output 1

// 120
// Hint

// Sample 1 Explanation

// Factorial of 5 = 5*4*3*2*1 = 120







function runProgram(input) {
    var n = +input
  console.log(fact(n))
}
function fact(n){
  if (n == 0) 
  return 1;
  return n * fact(n - 1);

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


