// Difference of K Ended
// Description

// You are given a sorted arrayAof sizeN, and another integerK
// You have to find if there exists a pair of integers with indexiandj, such thati != j, andA[i] - A[j] = k
// If such a pair exists, printYes, else printNo

// Input
// The first line of the input containsT, the number of test cases.

// The first line of each test case contains N and K, the size of the array and the value of K.

// The next line contains N space separated integers denoting the elements of the array

// Constraints

// 1 <=T<= 10

// 1 <=N<= 1000000

// -10^9 <=A[i]<= 10^9

// 0 <= K <= 10^9


// Output
// For each test case, print "Yes", if the pair as described in the problem exists, else print "No", on a new line.


// Sample Input 1 

// 2
// 5 3
// 1 2 3 4 5
// 5 8
// 1 2 3 4 5 
// Sample Output 1

// Yes
// No
// Hint

// In the sample test case, in the first test case, the value ofN = 5, and that ofK = 3. Upon observation, you can see the pairs with values(2, 5)or(1,4)have a difference of 3. Therefore, the output is Yes.

// In the second test case, no pair exists such that the difference between them is 8. Therefore, the output is No.






function runProgram(input) {
    input = input.split("\n");
    var cases = (+(input[0]));
    for (var i = 1; i < input.length; i+=2) {
        var line = input[i].split(" ").map(Number);
        var n = line[0]; var k = line[1];
        var arr = input[i+1].split(" ").map(Number);
        console.log(diffOfK(arr, n, k));
    }
}

function diffOfK(arr, n, k) {
    arr.sort(function(a,b) {
        return a - b;
    });
    var i = 0,
    j = 0;
    var res = "No";
    while(j < n) {
        if(arr[j] - arr[i] == k && i != j) {
            res = "Yes"; i++; j++;
        } else if(arr[j] - arr[i] > k) {
            i++;
        } else 
            j++;
    }
    return res;
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
