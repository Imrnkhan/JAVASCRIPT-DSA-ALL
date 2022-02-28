// Merge Sorting Ended
// Description

// You are given N numbers. Your task is to write MERGE SORT sorting algorithm (from scratch) to sort those N numbers.

// USING ANY OTHER ALGORITHM OR IN BUILT FUNCTION WOULD LEAD TO DISQUALIFICATION FROM NEXT HACKERRANK CONTEST


// Input
// Input Format:

// First line of input contains N

// Next line contains N space separated integers.

// Constraints:

// N < 1000000


// Output
// Output the sorted form of provided numbers


// Sample Input 1 

// 5
// 3 5 0 9 8
// Sample Output 1

// 0 3 5 8 9






function runProgram(input) {
  
    input = input.trim().split("\n")
    var N = +input[0]
    var arr = input[1].trim().split(" ").map(Number)
    
    console.log(merge(arr).join(" "))
    
    }
    
    
    
    function merge(arr){
        if(arr.length <= 1){
            return arr
        }
        var mid = Math.floor(arr.length/2)
        var left = merge(arr.slice(0,mid))
        var right = merge(arr.slice(mid))
        return sort(left, right)
    }
    function sort(left,right){
        var ans = []
        var i = 0
        var j = 0
        while(i < left.length || right.length > j ){
            if(left[i] < right[j] || right[j] == undefined){
                ans.push(left[i])
                i++
            }else{
                ans.push(right[j])
                j++
            }
        }
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
    
    