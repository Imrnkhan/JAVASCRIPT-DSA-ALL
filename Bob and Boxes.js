// Bob and Boxes Ended
// Description

// Bob the builder has a task of transferring a number of boxes, containing construction material, to a location for     construction. The workers are waiting for the construction material to arrive, so it is imperative that he gets the boxes delivered on time. His crane is designed in such a way, that he can only carry 1,3 or 5 boxes at a time. Wendy is worried for him, and to help him, wants to find the number of ways in which the boxes can be delievered. So, she asks you for a help. Help her find out the number of ways in which the boxes can be delievered.


// Input
// The first and the only line of input consists of a number N, denoting the number of boxes, that Bob has to transfer from one location to another.



// N <= 40


// Output
// The output consists of only one line the number of ways in which the boxes can be transferred from Bob's home to the construction site.


// Sample Input 1 

// 7
// Sample Output 1

// 12





function runProgram(input) {
    var n = +input
    console.log(rec(n))
  }
  function rec(n){
  if(n==0)
  return 1
  if(n<0)
  return 0
  return rec(n-1)+rec(n-3)+rec(n-5)
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
