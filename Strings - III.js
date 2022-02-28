// Strings - III -19727:12:25
// Description

// String, such that the size of the string is not given


// Input
// The first and the only line of the input contains the string

// Output
// Print the string given as input

// Sample Input 1 

// aman
// Sample Output 1

// aman




//Enter code here
function runProgram(input) {
 
 
    console.log(input)
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