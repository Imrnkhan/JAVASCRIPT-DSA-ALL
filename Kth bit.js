// Kth bit Ended
// Description

// Given two positive integer N and K. Check whether the Kth bit of N is set or not?


// Input
// First line: Single integer T denoting the number of test cases.
// For each test case:
// First line: Two single separated integers denoting the value of N and K.
// Constraints:
// 1 <= T <= 10
// 1 <= N <= 100000000
// 0 <= K < 32

// Output
// For each test case, print "Yes" if Kth bit is set. Else print "No".


// Sample Input 1 

// 2
// 5 2
// 5 1
// Sample Output 1

// Yes
// No
// Hint

// Given for the test cases:
// Test case 1 :
// N = 5, K = 2

// Binary representation of N : 101
// 0th and 2nd bit of N is set. Hence the answer is Yes.

// Test case 2 :
// N = 5, K = 1

// Binary representation of N : 101
// 0th and 2nd bit of N is set. Since K = 1, hence answer is No.





function runProgram(input) {
    input = input.trim().split('\n');
    for (let i = 1; i < input.length; i++) {
        let ln = input[i].split(" ").map(Number);
        let n = ln[0]; let k = ln[1];
        kBitSet(n, k);
    }
}

function kBitSet(n, k) {
    let i = 1;
    i = i << k
    res = n & i;
    if (res == 0)
        console.log("No");
    else
        console.log("Yes");
}

if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function(input) {
    read += input;
  });
  process.stdin.on("end", function() {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function() {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}