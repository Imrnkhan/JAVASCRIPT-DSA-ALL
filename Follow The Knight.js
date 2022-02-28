// Follow The Knight Ended
// Description

// You are very good at playing chess since childhood and you knew the rules very much. You have a  10 X 10 chessboard and you want to explore all the possible squares on the board that the knight can be at in exactly N moves.It is placed at (i,j) coordinate initially. For a 10X10 chessboard (1,1) will be the top left corner and (10,10) will be the bottom right corner.

// You can refer the following diagram, the knight can move to any of the squares marked as X in 1 move.

// Image


// Input
// Input Format

// Input will consist of three space seperated integers i,j and N

// Constraints

// N < 10


// Output
// Print a single integer denoting the number of blocks on the chessboard that the knight can be at in exactly N moves.


// Sample Input 1 

// 3 3 1
// Sample Output 1

// 8







function runProgram(input) {
    var [i,j,n] = input.split(" ").map(Number);
    var ans = array(i,j,n,0)
    var mat = {}
    var a = 0
    for(var k = 0; k < ans.length;k++){
        if(!(ans[k] in mat)){
            a++
            mat[ans[k]] = 1
        }
    }
    console.log(a)
}
function array(i,j,n,cur){
    if(cur > n){
        return []
    }
    if(i < 1 || j < 1 || i > 10 || j > 10){
        return []
    }
    if(cur == n){
        return [[i,j]];
    }
    var ans = []
    ans = ans.concat(array(i+1,j+2,n,cur+1))
    ans = ans.concat(array(i+1,j-2,n,cur+1))
    ans = ans.concat(array(i-1,j+2,n,cur+1))
    ans = ans.concat(array(i-1,j-2,n,cur+1))
    ans = ans.concat(array(i+2,j+1,n,cur+1))
    ans = ans.concat(array(i+2,j-1,n,cur+1))
    ans = ans.concat(array(i-2,j+1,n,cur+1))
    ans = ans.concat(array(i-2,j-1,n,cur+1))
    return ans
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


