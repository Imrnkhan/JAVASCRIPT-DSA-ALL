// Pattern Printing III Ended
// Description

// You are given a number stored in a variable with the nameN

// You have to print the pattern as shown below according to the value stored inN

// For example, consider the value stored inN = 5, then the required pattern will be

// * * * * *
//         *
//         *
//         *
// * * * * *

// Note : Please check for spaces

// Input
// The first and the only line of the input contains the value stored in the variableN

// Output
// Print the pattern as shown in the problem statement, according to the value stored inN

// Sample Input 1 

// 5
// Sample Output 1

// * * * * *
//         *
//         *
//         *
// * * * * *
// Hint

// In the sample test case, the value stored inN = 5, then the required pattern will be

// * * * * *
//         *
//         *
//         *
// * * * * *
// The following pattern uses_to show the presence of spaces in the pattern required. These are shown only for understanding, and should not be printed in the actual program

// * * * * *
// ________*
// ________*
// ________*
// * * * * *



function patternPrinting3(N){
    for(i=1;i<=N;i++){
    var res ="";
      for(j=1;j<=N;j++){
      if(i==1 || i==N || j==N){
      res = res+"* "
      }
        else{
        res = res + "  "
        }
        }
      console.log(res)
    }
  }

