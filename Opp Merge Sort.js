// Opp Merge Sort Ended
// Description

// Given a list of n integers. Write a program for merge sort algorithm such that it reverses the list in descending order.  You must not write any other sorting algorithm


// Input
// First line contains n which is the number of elements present in the array



// Second line contains n space-separated integers


// Output
// Output the elements present in the array sorted in descending order


// Sample Input 1 

// 5
// 2 3 1 4 5
// Sample Output 1

// 5 4 3 2 1




function merge(arr, low, high, mid) {
    var left = [];
    var right = [];


    for (var i = low; i <= mid; i++) {
        left.push(arr[i]);
    }

    for (var i = mid + 1; i <= high; i++) {
        right.push(arr[i]);
    }



    var I = 0;
    var J = 0;
    var K = low;

    while (I < left.length && J < right.length) {
        if (left[I] >= right[J]) {
            arr[K] = left[I];
            I++;
        } else {
            arr[K] = right[J];
            J++;
        }
        K++;
    }

    while (I < left.length) {
        arr[K] = left[I];
        I++;
        K++;
    }

    while (J < right.length) {
        arr[K] = right[J];
        J++;
        K++;
    }
    //    console.log(arr);
}


function oppMergeS(arr, low, high) {

    // return high

    if (low >= high) {
        return;
    }

    var mid = Math.floor((low + high) / 2);

    oppMergeS(arr, low, mid);
    oppMergeS(arr, mid + 1, high);
    merge(arr, low, high, mid);



}




function runProgram(input) {
   var input = input.trim().split("\n");
   var N = +input[0];

   var arr = input[1].trim().split(" ").map(Number);


    var low = 0;
    var high = N - 1;

    oppMergeS(arr, low, high);
    console.log(arr.join(" "));
   
  }
  if (process.env.USERNAME === "imran") {
      runProgram(`5
2 3 1 4 5`);
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
