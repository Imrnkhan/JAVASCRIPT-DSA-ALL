// Dots and Dashes Ended
// Description

// You are given a number stored in a variable with the nameN

// Print the required pattern, such that for all numbers in the range[1, N], includingN, if the number is odd, print a single_, else printN*without space, on a new line

// For example, consider the value stored inN = 5. Therefore, the required output is

// _
// *****
// _
// *****
// _

// Input
// The first and the only line of the input contains the value stored inN


// Output
// Print the required pattern as shown in the problem statement


// Sample Input 1 

// 6
// Sample Output 1

// _
// ******
// _
// ******
// _
// ******
// Hint

// In the sample test case, the value stored inN = 6

// Therefore, the required output will be

// _
// ******
// _
// ******
// _
// ******



function dotsAndDashes(N) {
    // Write code here
    for(var i =0;i<N;i++){
    if(i%2==0){
        console.log("_")
    }else{
        var s = ""
        for(var j = 0;j<N;j++){
            s+="*"
        }
        console.log(s)
    }
    }
}


