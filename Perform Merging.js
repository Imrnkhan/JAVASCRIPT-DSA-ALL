// Perform Merging Ended
// Description

// You are given two sorted arrays each of length N. Your task is to write a program that merges both the arrays such that the final array formed after merging is sorted.

// Note: You must not use sort() function in your entire code


// Input
// Input Format :

// First line contains N which is the number of integers present in both the arrays.

// Second line contains N sorted integers which are elements of first array.

// Third line contains N sorted integers which are elements of second array.



// Constraints :

// N < 1000


// Output
// Output the array formed after merging elements such that it is sorted


// Sample Input 1 

// 4
// 1 5 7 9
// 2 4 6 8
// Sample Output 1

// 1 2 4 5 6 7 8 9






function perfMerging(arr,curr){
    // console.log(arr,curr);
    if (curr > arr.length - 1) {
        return arr.join(" ");
    }

    for (var i = 0; i < arr.length - curr - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            var temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }
    return perfMerging(arr, curr + 1);
}


function runProgram(input) {
   var input = input.trim().split("\n");
   var N = +input[0];
   var arr1 = input[1].trim().split(" ").map(Number);
    var arr2 = input[2].trim().split(" ").map(Number);
    var curr = 0;
    var arr = arr1.concat(arr2);
    
    console.log(perfMerging(arr,curr));
   
  }
  if (process.env.USERNAME === "imran") {
      runProgram(`4
1 5 7 9
2 4 6 8`);
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
      process.exit(0) ;
    });
  }