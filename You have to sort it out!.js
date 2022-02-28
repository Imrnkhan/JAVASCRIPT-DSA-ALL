// You have to sort it out! Ended
// Description

// Given an array A of non-negative integers of size m. Your task is to sort the array in non-decreasing order and print out the original indices of the new sorted array.

// Example:

// A={4,5,3,7,1}

// After sorting the new array becomes A={1,3,4,5,7}.

// The required output should be "4 2 0 1 3"

// NOTE: The indexing of the array starts with 0.

// IMPORTANT: YOU CANNOT USE BUILT-IN SORT FUNCTION. YOU HAVE TO WRITE A SORTING ALGORITHM - Merge sort or Quick Sort


// Input
// Input Format :

// The first line of input consists of the size of the array

// The next line consists of the array of size m



// Constraints :

// 1<=m<=1000

// 0<=A[i]<=1000


// Output
// Output consists of a single line of integers


// Sample Input 1 

// 5
// 4 5 3 7 1
// Sample Output 1

// 4 2 0 1 3





function runProgram(input){
    input  = input.split("\n");
    var line = 1;
    var n = +input[0];
    var out = [];
    
    for(var i = 0; i < n; i++){
        out.push(i)
    }
    var arr = input[line].split(" ").map(Number)
    
    sortIt(n,arr,out)
}
function sortIt(n,arr,out){
    
    for(var i = 0; i <n;i++){
        for(var j = 0; j < n-i-1; j++){
            if(arr[j]>arr[j+1]){
                swap(arr,out,j,j+1)
            }
        }
    }
    
    
    function swap(arr,out,x,y){
        var temp = arr[x];
        arr[x] =arr[y];
        arr[y] = temp;
        temp = out[x]
        out[x] = out[y];
        out[y] = temp;
    }
    console.log(out.join(" "))
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

