// Rectangular Matrix -19726:56:6
// Description

// Rectangular Matrix - Single Test Case


// Input
// The first line of the input containsNandM, the dimensions of the matrix

// The nextNline containsMspace separated integers, denoting the elements of the matrix


// Output
// Print the elements of the matrix, row by row, by adding 1 to each element, as shown in the sample input

// Sample Input 1 

// 3 4
// 1 2 3 4
// 5 6 7 8
// 9 10 11 12
// Sample Output 1

// 2 3 4 5
// 6 7 8 9
// 10 11 12 13





//Enter code here
function runProgram(input) {
    // Write code here
    input = input.split("\n")
    var [N, M] = input[0].split(" ").map (Number)
    var arr = []
    for(var i = 0; i < N; i++){
        arr.push(input[i + 1].split(" ").map(Number))
    }
    array(N,M,arr)
  }
  
  function array(N,M,arr){
      var a = ""
      for(var i = 0; i < N; i++){
          for(var j = 0; j < M; j++){
              a += (arr[i][j] + 1) + " "
          }
          a += "\n"
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