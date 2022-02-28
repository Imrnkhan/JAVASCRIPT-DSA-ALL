// Subarray and Sum Ended
// Description

// Given an array of integers of length n and a positive integer K, the task is to find the count of the longest possible subarrays with the sum of its elements not divisible by K.


// Input
// Input Format

// First line contains n and k separated by space

// Second line contains strings of length n.

// Constraints

// 1 <= n <=10^6

// 1 <= k <= 100


// Output
// Print count of sub arrays.


// Sample Input 1 

// 4 3
// 2 3 4 6
// Sample Output 1

// 1
// Hint

// Sample 1 Explanation

// There is only one longest possible subarray of size 3 i.e. {3, 4, 6} having a sum 13, which is not divisible by K = 3.




function runProgram(input) {
    input = input.split("\n")
    var [n,k] = input[0].split(" ").map(Number)
    var arr = input[1].split(" ").map(Number)
    array(n,k,arr)
  }
  
  function array(n,k,arr){
      let sum = 0
      for(var i = 0; i < n; i++){
          sum += arr[i]
      }
      if(sum % k){
          console.log(1)
          return
      }
      let first = -1
      let last = -1
      for(var i = 0; i < n; i++){
          if(arr[i] % k){
              if(first == -1)
                  first = i;
                  
              last = i;
          }
      }
      if(first == -1){
          console.log(0)
          return
      }
      first++
      last = n - last
      
      first = n - first
      last = n - last
      
      let long = Math.max(first,last)
      let result = 0
      let newsum = 0
      for(let i = 0; i < long; i++){
          newsum += arr[i]
      }
      if(newsum % k != 0) {
          result++
      }
      for(var i = long; i < n;i++){
          newsum += arr[i]
          newsum -= arr[i-long]
      }
      if(newsum % k != 0){
          result++
      }
      console.log(result)
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
