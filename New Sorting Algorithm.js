// New Sorting Algorithm Ended
// Description

// Hassan has discovered his own sorting algorithm. The algorithm has following conditions:

// 1. Given an integer k,  sort the values in the array according to their modulo with k. That is, if there are two integers a and b, and a%k < b%k, then a would come before b in the sorted array.

// 2. If a%k = b%k, then the integer which comes first in the given array remains first in the sorted array.

// Your task is to write a program that sorts the given array as per above mentioned condition and print the sorted array.


// Input
// Input Format :

// The first line consists of two integers N and k, N being the number of elements in the array and k is the number with which we need to take the modulo.

// The next line consists of N space separated integers , denoting the elements of the array A.

// Constraints :

// N < 10000

// K < 1000000000

// Integers of array < 10000000000


// Output
// Print the modulo sorted array of the given array.


// Sample Input 1 

// 5 6
// 12 18 17 65 46
// Sample Output 1

// 12 18 46 17 65
// Hint

// 12%6=0

// 18%6=0

// 17%6=5

// 65%6=5

// 46%6=4

// So, the sorted order is: 12 18 46 17 65

// 12 and 18 have same result on modulo , so, 12 remains first in sorted array as it is first in given array






//Enter code here

function runProgram(input) {
    input = input.split("\n")
    var [n,r] = input[0].split(" ").map(Number)
    var arr = input[1].split(" ").map(Number)
    sort(arr,r,n)
  }
function sort(arr,r,n) {
    var a = []
    for(var i = 0; i < n; i++) {
        a.push([arr[i],arr[i]%r])
    }
    a.sort((a,b) => a[1] - b[1])
    var s = ""
    for(var i = 0; i < n; i++) {
        s += a[i][0] + " "
    }
    console.log(s)
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


// function solve(N,arr){
// for(var i=0;i<N;i++){
//      var min = i
//      for(var j=i+1;j<N;j++){
//           if(arr[min]%k > arr[j]%k){
//           min = j
//           }
//      }
//      var temp = arr[min]
//      arr[min] = arr[i]
//      arr[i] = temp
// }
// console.log(arr.join(" "));
// }
