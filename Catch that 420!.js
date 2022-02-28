// Catch that 420! Ended
// Description

// You are given an integern. Your task is to find if the string420is present in it or not.

// If 420 is present in it PrintCaughtor PrintEscaped.


// Input
// Input Format

// You are provided an integern.

// Constraints

// `1 <= N <= 1000000


// Output
// Output Format

// Output an string based on the conditions mentioned in description.


// Sample Input 1 

// 97420
// Sample Output 1

// Caught
// Hint

// Sample 1 Explanation

// 97420 contains 420.

// Hence output is "Caught"






function catch420(n) {
    //write code here
    let str = n.toString()
    for(var i = 0;i<n-2;i++){
        if(n[i]=="4" && n[i+1]=="2" && n[i+2]=="o"){
            console.log("yes")
        }else{
            console.log("No")
        }
        
    }
  
  }
  

