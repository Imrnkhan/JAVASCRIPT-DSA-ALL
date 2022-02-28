// Strings with Parenthesis Ended
// Description

// Given a string containing three types of parenthesis : (), [], {}, write a program to check whether the string contains a valid sequence of parentheses.


// Input
// Input Format

// Input contains one line which is the string with parentheses whose validity you have to check

// Constraints

// length of string <= 1000


// Output
// Output Format

// Print "balanced" (without quotes) if it has a sequence of valid parentheses, otherwise print "unbalanced" (without quotes)


// Sample Input 1 

// (((((((((())))))))))
// Sample Output 1

// balanced
// Sample Input 2 

// [one[two[three[four[five[six[seven[eight[nine[ten]]]]]]]]]]
// Sample Output 2

// balanced







function runProgram(input) {
    var ch = input
    string(ch)
}
function string(ch) {
    var stack = [];
    for (let i = 0; i < ch.length; i++) {
        if (ch[i] == "(" || ch[i] == "[" || ch[i] == "{") {
            stack.push(ch[i])
        } else {
            if (ch[i] == ")" && stack[stack.length - 1] == "(") {
                stack.pop()
            } else if (ch[i] == "]" && stack[stack.length - 1] == "[") {
                stack.pop()
            } else if (ch[i] == "}" && stack[stack.length - 1] == "{") {
                stack.pop()
            } else if (ch[i] == "}" || ch[i] == "]" || ch[i] == ")") {
                console.log("unbalanced")
                return;
            }
        }
    }
    if (stack.length == 0) {
        console.log("balanced")
    }
    else {
        console.log("unbalanced")
    }
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