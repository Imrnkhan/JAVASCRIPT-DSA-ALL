// Reduce String Ended
// Description

// Given a string of lowercase characters in range ascii[‘a’..’z’].

// You can perform one operation on this string in which you can selects a pair of adjacent lowercase letters that match, and delete them.

// For instance, the string aab could be shortened to b in one operation.

// Your task is to delete as many characters as possible using this method and print the resulting string. If the final string is empty, print "Empty String" (without quotes).

// Please note that characters can be deleted only if they form a pair and are same(i.e from aaa we can only delete 2 a's and will be left with a single a).

// I know there exists a simple implemented Stringentation based solution of this question, but please try to come up with an approach that uses stack data structure to solve the purpose


// Input
// Input Format

// First and the only line contains string

// Constraints

// Length of string < 1000






// Output
// Output Format

// If the final string is empty, print Empty String; otherwise, print the final non-reducible string.


// Sample Input 1 

// aaabccddd
// Sample Output 1

// abd
// Hint

// Sample 1 Explanation

// You can perform the following sequence of operations to get the final string:

// aaabccddd -> abccddd -> abddd -> abd





function runProgram(input){
    
    input = input.split("");
    for(var i = 0; i < input.length; i++){
        if(input[i] === input[i+1]){
            input.splice(i,2)
            i = -1;
        }
    }
    if(input.length === 0){
        console.log("Empty String")
    }else{
        console.log(input.join(""))
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
}//Enter code here
