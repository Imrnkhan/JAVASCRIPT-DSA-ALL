// N Queens Variant Ended
// Description

// The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.

// Given an integer n, print the number of distinct solutions to the n-queens puzzle.

// queens.png

// Sample figure to understand the problem.


// Input
// The first line of the input contains one integer n (1 ≤ n ≤ 10).


// Output
// Print the number of distinct solutions possible.


// Sample Input 1 

// 4
// Sample Output 1

// 2
// Sample Input 2 

// 1
// Sample Output 2

// 1
// Hint

// There are two distinct solutions to the 4-queens puzzle as shown below.

// [

// [".Q..",  // Solution 1

// "...Q",

// "Q...",

// "..Q."],

// ["..Q.",  // Solution 2

// "Q...",

// "...Q",

// ".Q.."]

// ]



// So the count is 2.






let ans = 0;

function isQueenSafe(chess, row, col) {
    //not required to check any squares to the right or below as it's not filled yet

    //check vertical top
    for (let i = row - 1, j = col; i >= 0; i--)
        if (chess[i][j] === 1) return false;

    //check top-left diagonal
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--)
        if (chess[i][j] === 1) return false;

    //check top-right diagonal
    for (let i = row - 1, j = col + 1; i >= 0 && j < chess[0].length; i--, j++)
        if (chess[i][j] === 1) return false;

    return true;
}

function nQueen(chess, row) {
    //if row is equal to chess.length, then we filled in all the queens
    if (row >= chess.length) ans++;

    for (let col = 0; col < chess[0].length; col++) {
        if (isQueenSafe(chess, row, col)) {
            chess[row][col] = 1;
            nQueen(chess, row + 1);
            chess[row][col] = 0;
        }
    }
}

function runProgram(input) {
    let n = Number(input);
    let chess = new Array(n).fill(0).map((el) => new Array(n).fill(0));
    nQueen(chess, 0);
    console.log(ans);
}
if (process.env.USERNAME === "getsu") {
    runProgram(`4`);
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

