// Strings - I -19727:13:11
// Description

// Single String, where the size of the string is given


// Input
// The first line of the input containsN, the size of the string

// The next line contains the string itself


// Output
// Print the string given as input, in terms of output, as shown in the sample test case

// Sample Input 1 

// 4
// aman
// Sample Output 1

// aman





function runProgram(input) {
    input = input.trim().split("\n")
    console.log(input[1])
}

if (process.env.USERNAME === "shiva") {
    runProgram(`7 6
4 3 7 6 7 2 2`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    var read = "";
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