// Pattern of N Ended
// Description

// You are given a number stored in a variable with the nameN

// You have to print all the numbers in the range from1 to N*N, such that there are exactlyNnumbers on each line

// For example, if the value stored inN = 3, then all the numbers in the range, from [1,9] need to be printed, such that there are 3 numbers on each line. Therefore, the required output is

// 1 2 3
// 4 5 6
// 7 8 9

// Input
// The first and the only line of the input contains the value stored in the variableN


// Output
// Print all the numbers in the range from [1, N*N], as shown in the problem statement, such that there areNnumbers on each line


// Sample Input 1 

// 4
// Sample Output 1

// 1 2 3 4 
// 5 6 7 8 
// 9 10 11 12 
// 13 14 15 16 
// Hint

// In the sample test case, the value stored atN = 4. Therefore, all the values in the range from[1,16]need to be printed.

// Also, there should be 4 elements on each line. Therefore, the output becomes

// 1 2 3 4
// 5 6 7 8
// 9 10 11 12
// 13 14 15 16




function patternOfN(N) {
    var str = ""
    var k = 1
    for(var i = 1;i<=N;i++){
        for(var j = 1;j<=N;j++){
            str = str+k++ +" "
        }
        str = str+"\n"
    }
    console.log(str)
}
