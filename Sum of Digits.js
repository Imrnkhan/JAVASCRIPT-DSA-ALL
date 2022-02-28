// Sum of Digits Ended
// Description

// You are given an arrayAofNintegers.

// You have to find the sum of the individual digit sum of all the elements in the array

// The digit sum here refers to the sum of digits, present in a given element

// Refer the sample I/O for better understanding


// Input
// The first line of the input containsT, the number of test cases

// The first line of each test case containsN, the number of elements in the array

// The next line containsNspace separated integers, denoting the elements of the array

// Constraints

// 1 <=T<= 10

// 1 <=N<= 10000

// 1 <=A[i]<= 10000


// Output
// For each test case, print a single integer denoting the sum of individual digit sum of all elements in the array, on a new line.


// Sample Input 1 

// 2
// 5
// 12 14 16 17 29
// 6
// 1 2 3 4 5 51
// Sample Output 1

// 34
// 21
// Hint

// In the first sample test case, the sum of digits for various values, is as given below

// 12 -> 1 + 2 = 3

// 14 -> 1 + 4 = 5

// 16 -> 1 + 6 = 7

// 17 -> 1 + 7 = 8

// 29 -> 2 + 9 = 11

// Therefore, the output is3 + 5 + 7 + 8 + 11 = 34.

// Similarly, in the second test case, the output is1 + 2 + 3 + 4 + 5 + 6 = 21






function runProgram(input) {
    // Write code here
    input = input.split("\n")
    var t = +input[0]
    var line = 1
    for(var i = 0; i < t; i++){
        var N = +input[line];
        line++;
        var arr = input[line].split(" ").map(Number)
        line++
        array(N,arr)
    }
  }
  
  function array(N,arr){
      
       var sum = 0;
      for(var i = 0; i < N; i++){
       
        var a = arr[i].toString()
        for(var j = 0; j < a.length;j++){
          sum += Number(a[j]);
        }
       
      }
  console.log(sum)
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
  