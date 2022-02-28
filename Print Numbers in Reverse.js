// Print Numbers in Reverse Ended
// Description

// You are given a number, stored in a variable with the nameN

// PrintNlines such that on each line, all the numbers in the range of [1,N] are printed in reverse order

// For example, consider the value stored inN = 5

// Therefore, the output required will be

// 5 4 3 2 1
// 5 4 3 2 1
// 5 4 3 2 1
// 5 4 3 2 1
// 5 4 3 2 1

// Input
// The first and the only line of the input contains the value stored inN


// Output
// Print the output as shown in the problem statement


// Sample Input 1 

// 4
// Sample Output 1

// 4 3 2 1
// 4 3 2 1
// 4 3 2 1
// 4 3 2 1
// Hint

// In the sample test case, the value stored inN = 4

// Therefore, as shown in the problem statement, the required output will be

// 4 3 2 1
// 4 3 2 1
// 4 3 2 1
// 4 3 2 1





function primeNumberReverse(num) {
    // Write code here
    str = ""
for(var i = num;i>=1;i--){
    for(var j = num;j>=1;j--){
str = str +j+" "
    }
    str =str+"\n"
}
console.log(str)
}

