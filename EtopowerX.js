// EtopowerX Ended
// Description

// One famous series says

// Image

// Using the below explanation for n-th term of e^x, calculate the value of e^x given x and n. Do not calculate it directly using the formula and do not write any iterative code.

// Image


// Input
// Input Format

// First and the only line of code contains x and n respectively

// Constraints

// x <= 14

// n <= 12


// Output
// Print the value to 4 places after the decimal. For example, 13.1310 is a valid answer but 13.131 is not. Also, 12 is not a valid answer but 12.0000 is a valid answer


// Sample Input 1 

// 4 2
// Sample Output 1

// 13.0000










function fact(n) {
    if (n == 1 || n == 0)
        return 1
    else
        return n * fact(n - 1);
}

function EtoPowerX(x, n) {
    if (n == 1)
        return x + EtoPowerX(x, n - 1);
    if (n == 0)
        return 1;

    return (x ** n) / fact(n) + EtoPowerX(x, n - 1);

}

function runProgram(input) {
    let arr = input.trim().split(" ").map(Number);
    let x = arr[0];
    let n = arr[1];
    console.log(EtoPowerX(x, n).toFixed(4));

}
if (process.env.USERNAME === "getsu") {
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
        process.exit(0);
    });
}