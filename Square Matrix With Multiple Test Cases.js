// Square Matrix With Multiple Test Cases -19726:56:43
// Description

// Square Matrix With Multiple Test Cases


// Input
// The first line of the input containsT, the number of test cases

// The first line of each test case containsN, the dimensions of the matrix

// The nextNlines containNspace separated integers, denoting the elements of the matrix


// Output
// Print all the elements of the matrix row by row, by adding 1 to each element, on a new line, as shown in the sample output

// Sample Input 1 

// 2
// 3
// 1 2 3
// 4 5 6
// 7 8 9
// 2
// 1 2
// 3 4
// Sample Output 1

// 2 3 4
// 5 6 7
// 8 9 10
// 2 3 
// 4 5





//Enter code here
function runProgram(input) {
    // Write code here
    input = input.split("\n")
    var t = +input[0]
    var line = 1
    for(var i = 0; i < t; i++){
        var N = input[line]
        line++
        var arr = []
        for(var j = 0; j < N; j++){
            arr.push(input[line].split(" ").map(Number))
            line++
        }
          array(N,arr)
    }
  }
  
  function array(N,arr){
      for(var i = 0; i < N; i++){
      var a = ""
          for(var j = 0; j < N; j++){
              a += (arr[i][j] + 1) + " "
          }
      console.log(a)
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