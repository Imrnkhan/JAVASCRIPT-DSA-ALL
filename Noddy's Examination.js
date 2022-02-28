// Noddy's Examination Ended
// Description

// Noddy has an exam in which each question has a difficulty level in the form of an Integer. Now, Noddy can only solve the problems that have difficulty level less than or equal to X. Now the rules are-

// The score of the student is equal to the maximum number of answers he/she has attempted without skipping a question.

// The student is allowed to skip just "one" question that will not be counted in the continuity of the questions.

// Note- Assume the student knows the solution to the problem he/she attempts and always starts the paper from the first question.

// Given the number of Questions, N, the maximum difficulty level of the problem Noddy can solve, X, and the difficulty level of each question in the form of an array

// Determine the maximum score that Noddy can score?


// Input
// First Line contains Integer N, the number of questions and the maximum difficulty X Noddy can solve.

// Next line contains N integers, denoting the difficulty level of each question.

// N <= 100000

// X <= 1000000000

// Difficulty level of each question <= 1000000000


// Output
// Print the maximum score that Noddy can score


// Sample Input 1 

// 7 6
// 4 3 7 6 7 2 2
// Sample Output 1

// 3
// Hint

// Sample 1 Explanation

// In this example, maximum difficulty = 6, Noddy solves question 0 and 1, but skips the question 2 as A[2]>6. Monk then solves the question 3 , but stops at 4 because A[4]>6 and question 2 was already skipped. As 3 questions (0,1 and 3) were solved and 2 questions (2 and 4) have been skipped, therefore we print "3".









function findMaxCountSolQ(items, k) {
    var count = 0;
    for (var i = 0; i < items.length; i++) {
        if (items[i] > k) {
            count++;
        }
        if (count == 2) {
            return i - 1;
        }

    }
    if (count < 2) {
        return items.length
    }

}


function runProgram(input) {

    var Input = input.split("\n");

    var lenAndK = Input[0].split(" ").map(Number);
    var k = lenAndK[1];

    var arr = Input[1].split(" ").map(Number);

    var ans = findMaxCountSolQ(arr, k);
    console.log(ans);

}

if (process.env.USERNAME === "Imran") {
    runProgram(`7 6
4 3 6 6 7 2 2`);
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
