// Play of 4 and 6 Ended
// Description

// You are given a number stored in a variable with the nameN

// Print the output according to the following conditions

// 1. If N is divisible by both 4 and 6, print "Awesome!", without quotes

// 2. Else If N is divisible by 4, print "Four!", without quotes

// 3. Else if N is divisible by 6, print "Six!", without quotes

// 4. Else print "Dark!", without quotes

// Input
// The first and the only line of the input contains the value stored inN

// Output
// Print the output as per the conditions mentioned in the problem statement

// Sample Input 1 

// 12
// Sample Output 1

// Awesome!
// Hint

// In the sample test case, the value stored inN = 12. Now, 12 is divisible by both 4 and 6, therefore, the output isAwesome!





function playOf4and6(N) {
    if(N%4== 0 && N%6==0){
    console.log("Awesome!")
    }
    else if(N%4== 0){
    console.log("Four!")
    }
    else if(N%6== 0){
    console.log("Six!")
    }
    else{
    console.log("Dark!")
    }
  }