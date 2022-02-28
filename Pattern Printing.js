// Pattern Printing Ended
// Description

// You are given a number, stored in a variable with the nameN

// Print the pattern as shown below.

// If the value stored inN = 4, then the pattern required will be

// *
// **
// ***
// ****

// Input
// The first and the only line of each test case contains the value stored in the variableN


// Output
// Print the pattern as shown in the problem statement


// Sample Input 1 

// 2
// Sample Output 1

// *
// **
// Sample Input 2 

// 1
// Sample Output 2

// *
// Hint

// In the first sample test case, the value stored inN = 2

// Therefore, as shown in the problem statement, the required pattern will be

// *
// **
// In the second sample test case, the value stored inN = 1

// Therefore, as shown in the problem statement, the required pattern will be

// *

function patternPrinting(N) {

    var str = ""
    for(var i = 1;i<=N;i++){
        for(var j = 1;j<=i;j++){
            str = str+"*"
        }
        str= str+"\n"
    }
    console.log(str)
}

