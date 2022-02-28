// Pattern of Inverted L Ended
// Description

// You are given a number stored in a variable with the name,N

// Print the pattern as shown below, according to the value stored inN

// For example, consider the value stored inN = 5

// Then, the required output will be, which represents an invertedL

// * * * * *
// *
// *
// *
// *

// Input
// The first and the only line of the input contains the value stored inN


// Output
// Print the output as shown in the problem statement


// Sample Input 1 

// 5
// Sample Output 1

// * * * * *
// *
// *
// *
// *
// Hint

// In the sample test case, the value stored inN = 5

// Therefore, the output required will be

// * * * * *
// *
// *
// *
// *




function invertedL(N) {
    // Write code here
    str = "";
    for(var i = 1; i<=N; i++){
        for(var j = 1; j<=N;j++){
            if(j===1 || i===1){
               str= str+"* ";  
            }
            
        }
       console.log(str)
        str = "";
    }
    
    
}
