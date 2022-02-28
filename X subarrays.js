// X subarrays Ended
// Description

// Given a array A having N positive integers. Count all the subarrays of A having length X, such that each subarray has no integer greater than K.


// Input
// First line: Single integer T denoting the number of test cases.
// For each test case:
// First line: Three space separated integers denoting the value of N, K and, X.
// Next line : N single space separated integers denoting the elements of array A.
// Constraints:
// 1 <= T<= 50
// 1<= N <= 1000000
// 1 <= A[ i ], K <= 100000
// 1 <= X <= N

// Output
// For each test case, print in a new line a single integer denoting the number of subarrays.


// Sample Input 1 

// 1
// 5 3 2
// 1 3 2 5 1
// Sample Output 1

// 2
// Hint

// Given for the only test case,
// N = 5, K = 3, X = 2

// The following subarrays of length 2 have no integer greater then 3 in them :
// [ 1, 3 ], [ 3, 2 ].

// No other subarray is possible.





//Enter code here
function runProgram(input) {
    input = input.split("\n")
    var t = +input[0]
    var line = 1
    for(var i = 0; i < t; i++){
        var [N,K,X] = input[line].split(" ").map(Number)
        line++;
        var arr = input[line].split(" ").map(Number)
        line++
        array(N,K,X,arr)
    }
  }
  function array(N,K,X,arr){
      var count = 0
      var char_count = 0
      for(var i = 0; i < X; i++){
        if(arr[i] > K){
          char_count++
        }
      }
      if(char_count == 0){
        count++
      }
      for(var i = X; i < N; i++){
        if(arr[i-X] > K){
          char_count--
        }
        if(arr[i] > K){
          char_count++
        }
        if(char_count == 0){
          count++
        }
      }
      console.log(count)
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