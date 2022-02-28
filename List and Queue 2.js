// List and Queue 2 Ended
// Description

// You need to implement a list using queue data structure. You can only use queue.get() and queue.put() methods.

// Note- import and the use queue data structure.


// Input
// The first line contains the number of operations (t).

// Next t lines contains commands for the list.

// Eg- Push 3 means add 3 in the list

// Pop means to remove the last element of the list and print it on the screen

// Note-If the list is empty print- 'Empty' (Without the quotes)

// t <= 500000


// Output
// Print the last element as a single integer on the screen.


// Sample Input 1 

// 3
// Push 4
// Push 5
// Pop
// Sample Output 1

// 5
// Hint

// After two push operations the list would look like - [4,5], popping it should return 5







function runProgram(input) {
    input = input.split("\n")
    var t = +input[0]
    var l = 1
    var stk = []
    for(var i = 0; i < t; i++) {
        var [a,b] = input[l].trim().split(" ")
        l++
        if(a == "Push") {
            stk.push(b)
        } else {
            if(stk.length > 0) {
                console.log(stk.pop())
            } else {
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