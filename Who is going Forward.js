// Who is going Forward? Ended
// Description

// A total of n participants took part in the contest (n ≥ k), and you already know their scores. Calculate how many participants will advance to the next round.

// The rule of contest is :"Contestant who earns a score equal to or greater than the k-th place finisher's score will advance to the next round, as long as the contestant earns a positive score..."


// Input
// Input Format :

// The first line of the input contains two integers n and k separated by a single space.

// The second line contains n space-separated integers a1, a2, ..., an (0 ≤ ai ≤ 100), where ai is the score earned by the participant who got the i-th place. The given sequence is non-increasing (that is, for all i from 1 to n - 1 the following condition is fulfilled: ai ≥ ai + 1).

// Constraints :

// 1 ≤ k ≤ n ≤ 50


// Output
// Output the number of participants who advance to the next round.


// Sample Input 1 

// 8 5
// 10 9 8 7 7 7 5 5
// Sample Output 1

// 6
// Hint

// Output Explanation :

// In the sample input the participant on the 5th place earned 7 points. As the participant on the 6th place also earned 7 points, there are 6 advancers.







function runProgram(input) {
    var main = input.split("\n")
    line=0
    
        main[line]=main[line].split(" ").map(Number)
        arr=main[line+1].split(" ").map(Number)
        m=main[line][0]
        k=main[line][1]
        console.log(whoIsGoingForward(arr,k))
       
    
        
           
    
    
    
    
    
       
    } 
    function whoIsGoingForward(arr,k){
        count = 0;
        for (i=0;i<arr.length;i++){
          if (arr[i] >= arr[k-1] && arr[i] > 0) {
            //   console.log(arr[i]+"b"+arr[k-1])
              count++
          }
        }
        return count;
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
