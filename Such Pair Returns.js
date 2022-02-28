// Such Pair Returns Ended
// Description

// For each test case, you are given N integers and K, your task is to write a program that prints "1" (without quotes) if there are 2 integers present in the array whose sum is K. Else print "-1" (without quotes).


// Input
// 10^6Input Format :

// First line contains T, no of test cases.

// First line of each test case contains 2 space separated integers: N & K

// Second line of each test case contains **N** space separated integers

// Constraints :

// 1 <= T <= 10

// 1 <= N <=1000000

// 1 <= abs(A[i]) <=10^6<= abs(K) <= 2*10^6




// Output
// Output 1/-1 depending on the condition for each test case on new line


// Sample Input 1 

// 1
// 5 2
// 3 4 0 2 7
// Sample Output 1

// 1





function runProgram(input) {
    input = input.split("\n")
    var t = +input[0]
    var line = 1
    for(var i = 0; i < t; i++) {
        var [n,s] = input[line].split(" ").map(Number)
        var arr = input[line+1].split(" ").map(Number)
        line += 2
        arr.sort((a,b) => a-b)
        suchPairs(n,s,arr)
    }
}
function suchPairs(n,s,arr) {
    var i = 0
    var j = n-1
    while(i < j) {
        var sum = arr[i] + arr[j]
        if(sum == s) {
            console.log(1)
            return
        } else if (sum < s) {
            i++
        } else {
            j--
        }
    }
    console.log(-1)
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
