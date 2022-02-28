// Strings - II -19726:54:38
// Description

// Strings with multiple test case, such as the size of each string is given


// Input
// The first line of the test case containsT, the number of test case

// The first line of each test case, containsN, the size of the string

// The next line contains the string itself


// Output
// Print each string on a new line, as shown in the sample test case

// Sample Input 1 

// 2
// 4
// aman
// 6
// rutwik
// Sample Output 1

// aman
// rutwik





//Enter code here
function runProgram(input) {
    // Write code here
    input = input.split("\n")
    var T = +input[0]
    var line = 1
    for(var i = 0; i < T; i++){
        var N = +input[line]
        line ++
        var str = input[line]
        line++
        array(N,str)
    }
  }
  
  function array(N,str){
      console.log(str)
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