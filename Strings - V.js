// Strings - V -19727:9:59
// Description

// Multiple Strings form a sentence together


// Input
// The first and the only line of the input contains the string, given as input


// Output
// Print the input string as output

// Sample Input 1 

// my name is ankush
// Sample Output 1

// my name is ankush




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