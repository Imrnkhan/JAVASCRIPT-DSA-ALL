// Element in the middle Ended
// Description

// Given an unsorted array of size, N. Find the first element in the array such that all of its left elements are smaller and all right elements to it are greater than it.

// Note: Left and right side elements can be equal to the required element. And extreme elements cannot be required element.


// Input
// Input Format

// The first line contains an integer n denoting the size of the array and the second line contains n space separated array elements.

// Constraints

// n <= 1000

// Ai <= 10000




// Output
// For each test case, in a new line print the required element. If no such element present in the array then print -1.


// Sample Input 1 

// 5
// 4 3 6 7 8
// Sample Output 1

// 6







function runProgram(input) {
    input = input.split("\n")
    var n = +input[0]
    var arr = input[1].split(" ").map(Number)
    middel(n,arr)
}
function middel(n,arr) {
    for(var i = 0; i < n; i++) {
        if(left(i,arr) && right(i,arr)) {
            console.log(arr[i])
            return;
        }
    }
console.log(-1)

        
    
}
function left(index,a) {
    for(var i = index-1; i >= 0 ; i--) {
        if(a[i] > a[index]) {
            return false
        }
    }
    return true
}
function right(index,a) {
    for(var i = index+1; i < a.length; i++) {
        if(a[i] < a[index]) {
            return false
        }
    }
    return true
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