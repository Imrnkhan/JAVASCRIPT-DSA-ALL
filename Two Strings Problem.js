// Two Strings Problem Ended
// Description

// A substring is a contiguous sequence of characters within a string.

// You are given two strings: S1 and S2.

// Print "Yes" if S2 is a substring of S1, else print "No"

// You are not allowed to use any inbuilt function.


// Input
// Input Format:

// First line contains S1

// Second line contains S2

// Constraints:

// Length of both strings < 100


// Output
// Output string based on S1 and S2


// Sample Input 1 

// masai
// sai
// Sample Output 1

// Yes




function runProgram(input) {
    input = input.split('\n')
    var a = input[0]
    var b = input[1]
    string(a,b)
    
   }
   function string(a,b){
       if(a.includes(b)) {
       console.log("Yes")
       return
   }
   console.log("No")
   
   // for(var i = 0; i < a.length; i++) {
   //     var s = ""
   //     for(var j = i; j < a.length; j++) {
   //         s += a[j]
   //         if(s == b){
   //             console.log("Yes")
   //             return
   //         }
   //     }
   // }
   // console.log("No")
   
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


