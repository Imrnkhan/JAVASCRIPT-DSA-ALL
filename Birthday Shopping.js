// Birthday Shopping Ended
// Description

// Alex is celebrating his birthday and wants to buy a few things for himself.

// There are n items present in the shop indexed from 1 to n. He wished he could buy everything but he has been instructed by his mother that he can buy exactly k items.

// Print all the various possible combinations of items he can buy.

// Make sure the combinations are sorted and distinct.

// For Clarity -

// [1,2] is valid while [2,1] is not.


// Input
// The first line of the input contains two integers n(1 ≤ n ≤ 20) and k (1 ≤ k ≤ n).


// Output
// Print each possible combination in a new line.

// Elements within the combination must be in non-decreasing order. All the combinations must be distinct and sorted in ascending order or lexicographically.


// Sample Input 1 

// 4 2
// Sample Output 1

// 1 2 
// 1 3 
// 1 4 
// 2 3 
// 2 4 
// 3 4 
// Sample Input 2 

// 3 1
// Sample Output 2

// 1
// 2
// 3
// Hint

// Sample Input 1 :

// 4 2
// Total Items = 4 ( 1, 2, 3, 4)

// k = 2 (No of things he can buy)

// Combinations possible of 2 items out of 4 :

// 1 2 
// 1 3 
// 1 4 
// 2 3 
// 2 4 
// 3 4 


// Sample Input 2 :

// 3 1
// Total Items = 3 ( 1, 2, 3)

// k = 1 (No of things he can buy)

// Combinations possible of 1 item out of 3 :

// 1
// 2
// 3







function bdayS(arr, K, curr1, newStr){
    // console.log(arr, K, curr1, newStr);

    if(newStr.length == K){
        
        console.log(newStr.join(" "));
    }

    if(curr1 == arr.length){
        return;
    }

    for(var i = curr1; i < arr.length; i++){
        newStr.push(arr[i]);
        bdayS(arr,K, i + 1, newStr);
        newStr.pop();
    }
}


function runProgram(input) {
   var input = input.trim().split(" ");
   var N = +input[0];
   var K = +input[1];

    // bdayS(N,K);
    var newStr = [];
    var curr1 = 0;
    var curr = 1;
    var arr = [];
    function split1(N, curr) {
        if (curr > N) {
            return arr;
        }

        arr.push(curr);

        return split1(N, curr + 1);
    }
    split1(N, curr)

    bdayS(arr,K,curr1,newStr);

    // console.log(arr);
   
  }
  if (process.env.USERNAME === "imran") {
      runProgram(`4 2`);
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