// New Year and Pyramid Ended
// Description

// You have decided to build a pyramid of stones on this new year. The simple rule is that the top level of the pyramid must consist of 1 stone, the second level must consist of 1 + 2 = 3 stones, the third level must have 1 + 2 + 3 = 6 stones, and so on.

// Effectively, the i-th level of the pyramid contains 1 + 2 + ... + (i - 1) + i stones.

// You have got n stones and have to build a pyramid from them.

// Team Masai wants to know what is the maximum height of the pyramid that you can make using the given stones.


// Input
// Input Format

// The first line contains integer n.

// Constraints

// n <= 10000


// Output
// Print the maximum possible height of the pyramid.


// Sample Input 1 

// 25
// Sample Output 1

// 4






function runProgram(input) {
    
    input = input.split("\n");
    
   
     var n = +input[0];
     
     
     pyramidMove(n);
 }

 function pyramidMove(n){
     
  var steps = 1;
 var sum = 0;
 
 while (n>0){
     sum = sum + steps;
     var temp = sum;
     if(sum > n){
         break;
     }else{
         n = n - temp;
     }
     steps++;
 }

console.log(steps-1)

 
     
     
 }
 
//   * int n //No of stones available
//     * int i = 1 //denotes the current level
//     * while(n>0)
//         * int temp = sum(i);
//         * if (temp > n) break;
//         * n = n - temp;
//         * i++;
//     * print i
 if (process.env.USERNAME === "") {
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

