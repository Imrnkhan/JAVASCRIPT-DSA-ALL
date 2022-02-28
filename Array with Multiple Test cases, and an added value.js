// Array with Multiple Test cases, and an added value -19726:53:13
// Description

// You are givenTtest cases, each test case contains an arrayA, and a valueK

// Print the values of the array, by adding the valueKto each element in the array

// You have to do this for all the test cases


// Input
// The first line of the input containsT, the number of test cases

// The first line of each test case containsNandK, as explained in the problem statement

// The next line containsNspace separated integers, denoting the elements of the array


// Output
// For each test case, print the elements of the array after updating as explained in the problem statement

// Sample Input 1 

// 2
// 3 2
// 1 2 3
// 3 1
// 1 2 3
// Sample Output 1

// 3 4 5
// 2 3 4





//Enter code here
function runProgram(input) {
    input = input.split("\n");
    var t = +input[0];
    var line = 1;
    for(var i = 0; i < t; i++){
        var [N,K] = input[line].split(" ").map(Number);
        line++;
        var arr = input[line].split(" ").map(Number);
        line++;
        array(N,K,arr)
    }
  }
  
  function array(N,K,arr){
      var a = "";
      for(var i = 0; i < N; i++){
          a += (arr[i] + K) + " "
      }
    console.log(a)
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