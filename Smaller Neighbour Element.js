// Smaller Neighbour Element Ended
// Description

// Given an array, find the nearest smaller element G[i] for every element A[i] in the array such that the element has an index smaller than i.

// Mathematically,

// G[i] for an element A[i] is an element A[j] such that

// j is maximum possible AND

// j < i AND

// A[j] < A[i]

// Note: Elements for which no smaller element exist, consider next smaller element as -1.


// Input
// Input Format:

// First line contains an integer N denoting the number of elements in the array (not necessarily distinct).

// Second line contains N space separated integers denoting the elements of the array.

// Constraints:

// N <= 100000


// Output
// Print N space separated integers denoting the array G.


// Sample Input 1 

// 8
// 39 27 11 4 24 32 32 1
// Sample Output 1

// -1 -1 -1 -1 4 24 24 -1



function runProgram(input) {
     
    input = input.split("\n")
    var n = +input[0]
    var arr = input[1].split(" ").map(Number)
    array(n,arr)
}
function array(n,arr){
   var a = []
   var b = []
   
   for(var i = 0; i<n;i++){
       while(a.length > 0 && a[a.length-1] >= arr[i]){
           a.pop()
       }
       if(a.length == 0){
           b.push(-1)
       } else {
           b.push(a[a.length-1])
       }
       a.push(arr[i])
   }
   console.log(b.join(" "))
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