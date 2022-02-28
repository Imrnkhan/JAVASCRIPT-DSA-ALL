// Implement GCD Ended
// Description

// Implement the GCD Function using recursion. Given two integers a and b, find the greatest common divisor of a and b.

// The approach which uses logarithmic time complexity is expected here.


// Input
// The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. Then t test cases follow.

// The first line of each test case contains two integers a and b (1 ≤ a, b ≤ 1000000000).


// Output
// For each test case, print the answer: GCD of the two numbers.


// Sample Input 1 

// 2
// 6 9
// 2 25
// Sample Output 1

// 3
// 1







function runProgram(input) {
    input = input.split("\n")
    var tc = +input[0]
    for(var i =1;i<=tc;i++){
        var [L,R] = input[i].split(' ').map(Number)
   console.log(gcd(L,R))
    }
  }
  
  function gcd(L,R){
          // return L % R == 0 ? R : gcd(R,L % R)
          if(L%R==0){
              return R
              
              
          }else{
        return  gcd(R,L%R)
              
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
  