// Array - Multiple Test Cases -19726:58:30
// Description

// Array with Multiple Test Cases


// Input
// The first line of the input containsT, the number of test cases

// The first line of each test case containsN, the size of the array

// The next line of the input containsNspace separated integers referring the elements of the array


// Output
// Print elements of each array on a single line, by adding 1 to each element, for each test case

// Sample Input 1 

// 2
// 5
// 1 2 3 4 5
// 4
// 1 2 3 4
// Sample Output 1

// 2 3 4 5 6
// 2 3 4 5




//Enter code here
function runProgram(input){
    input = input.split('\n')
    var testcase = +input[0]
    var line = 1
    for(var i = 0;i<testcase;i++){
        var N = +input[line]
        line++
        var arr = input[line].split(" ").map(Number)
        line++
        array(N,arr)
        
        // console.log(N,arr)
    }
    
}
function array(N,arr){
    var str = ""
    for(var i = 0;i<N;i++){
        str+= arr[i]+1+" "
        
    }
    console.log(str)
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