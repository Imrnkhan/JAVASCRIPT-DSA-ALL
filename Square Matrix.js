// Square Matrix -19726:57:51
// Description

// Square Matrix - Single Test Case


// Input
// The first line of the input containsN, the dimensions of the square matrix

// The nextNlines containsNspace separated integers, denoting the elements of the matrix


// Output
// Print the elements of the matrix row by row, by adding 1 to each element, as shown in the sample test case

// Sample Input 1 

// 3 
// 1 2 3
// 4 5 6
// 7 8 9
// Sample Output 1

// 2 3 4
// 5 6 7
// 8 9 10






//Enter code here
function runProgram(input){
    input = input.split('\n')
    var size = +input[0]
    var mat =[]
    // var line = 1
    for(var i = 0;i<size;i++){
        mat.push(input[i+1].split(" ").map(Number))
        
        
    }
array(size,mat)

}
function array(size,mat){
    var a = ""
    for(var i = 0;i<size;i++){
        for(var j =0;j<size;j++){
        a+=(mat[i][j]+1)+" "
    }
    a+=("\n")
    }
    console.log(a)
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