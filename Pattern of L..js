// Pattern of L Ended
// Description

// You are given a number stored in a variable with the nameN

// Print the pattern as shown below, according to the value stored inN

// For example, consider the value stored inN = 5

// Then, the required pattern will be as follows, which represents the letterL

// *
// *
// *
// *
// * * * * *


// Input
// The first and the only line of the input contains the valueN


// Output
// Print the pattern as shown in the problem statement


// Sample Input 1 

// 4
// Sample Output 1

// *
// *
// *
// * * * *
// Hint

// In the sample test case, the value stored inN = 4. Therefore, the required pattern will be as shown below

// *
// *
// *
// * * * *




function patternOfL(N) {

    for(var i=1;i<=N;i++){
    str=""
   if(i<N){
       console.log("*")
       
   }
    else{sum=''
        for(var j =0;j<N;j++){
            sum+="*"+" "
        }
         console.log(sum)
    }

    
}
}
