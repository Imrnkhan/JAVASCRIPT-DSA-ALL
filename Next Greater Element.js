// Next Greater Element Ended
// Description

// Given an array of N elements, find the next greater element for each element in the array, print -1 if it does not exits. Refer to the sample I/O for better understanding


// Input
// The first line contains T, the number of test cases.

// The first line of each test case contains N, the number of elements in the array. The next line contains N space separated integers denoting the elements of the array

// Constraints

// 1 <= T <= 10

// 1 <= N <= 10^5

// 0 <= A[i] <= 10000


// Output
// For each test case, print N space separated integers, denoting the next greater element for each element,  on a new line.


// Sample Input 1 

// 1
// 4
// 1 3 2 4
// Sample Output 1

// 3 4 4 -1
// Hint

// In the sample test case, the array contains 4 elements, and for the first element, the next greater element will be 3, similarly for the next element, the next greater element will be 4, and for the third element as well, the next greater element will be 4. Since, the last element has no elements ahead of it, the next greater element will be -1.








function runProgram(input) {
    input = input.split("\n");
    for (let i = 1; i < input.length; i+=2) {
        var n = +input[i];
      var arr = input[i+1].split(" ").map(Number);
      console.log(greatestNum(arr, n).join(" "));
    }
  }
  
  function greatestNum(arr, n) {
      var st = [],
      res = [];
      for (var i = n - 1; i >= 0; i--) {
          while (!st.length == 0 && st[st.length - 1] <= arr[i]) {
              st.pop();
          }
          if (st.length == 0) {
              res[i] = -1;
          } else {
              res[i] = st[st.length - 1];
          }
          st.push(arr[i]);
      }
      return res;
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