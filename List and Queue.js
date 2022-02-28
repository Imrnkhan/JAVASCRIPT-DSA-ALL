// List and Queue Ended
// Description

// You need to implement a queue data structure with a list using plain list methods. You can only use list.append() and list.pop() methods in this question.

// Note-You can't uselist.pop(index) too in this question.


// Input
// The first line contains the number of operations (t).

// Next t lines contains commands for the queue.

// Eg- E 3 means add 3 in the queue

// D means to remove the front element of the queue and print it on the screen

// Note-If the queue is empty print- 'Empty' (Without the quotes)


// Output
// Print the front element as a single integer on the screen.


// Sample Input 1 

// 4
// E 2
// E 3
// D
// D
// Sample Output 1

// 2
// 3






function runProgram(input) {
    input = input.trim().split("\n")
   var N = +input[0]
   var arr = []
   for(var i = 0;i<N;i++){
       line=input[i+1].trim().split(" ")
       if(line[0]=="E"){
           for(var j =1;j<line.length;j++){
               arr.push(line[j])
           }
       }
       else{
           if(line[0]=="D" && arr.length>0){
               console.log(arr.shift())
           }
           else{
               console.log("Empty")
           }
       }
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


