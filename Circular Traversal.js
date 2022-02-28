// Circular Traversal Ended
// Description

// Given a square matrix, you have to find the reverse U traversal of the matrix. Refer the sample I/O for better understanding. Refer the given figure for better understanding.

// Note: No element should be visited more than once.

// Image


// Input
// The first line of the input contains T, the number of test cases.

// The next line contains N, the size of the square matrix.

// The next N lines contains N space separated integers each denoting the values of the matrix.

// Constraints

// 1 <= T <= 10

// 1 <= N <= 50

// 1 <= A[i][j] <= 50


// Output
// For each test case, print the elements that lie on the reverse U traversal, on a single line, on a new line.


// Sample Input 1 

// 1
// 3
// 1 2 3
// 4 5 6
// 7 8 9
// Sample Output 1

// 7 4 1 2 3 6 9 8 
// Hint

// The elements that lie on the circular traversal of the given matrix are - 7,4,1,2,3,6,9,8







function runProgram(input){
    input = input.split("\n")
    var tc = +input[0]
    var line = 1
    for(var i = 0;i<tc;i++){
        var size = +input[line]
        line++
        var arr = []
        for(var j = 0; j < size;j++){
            arr.push(input[line].split(" ").map(Number))
            line++
        }
        mat(size,arr)
        // console.log(size,arr)
    }
}
function mat(size,arr){
    var row = arr.length
var col = arr[0].length
var a = ""
for(var j = 0; j < 1; j++){
    for(var i = row-1; i > 0; i--){
        a += arr[i][j] + " "
    }
}

for(var i = 0; i < 1; i++){
    for(var j = 0; j < col; j++){
        a += arr[i][j] + " "
    }
}
for(var i = 1; i < row-1; i++){
    for(var j = col-1; j < col; j++){
        a += arr[i][j] + " "
    }
}
for(var i = row-1; i < row; i++){
    for(var j = col-1; j > 0; j--){
        a += arr[i][j] + " "
    }
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