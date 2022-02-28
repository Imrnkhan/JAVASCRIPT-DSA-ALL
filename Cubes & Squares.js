// Cubes & Squares Ended
// Description

// You are given two numbers, stored in a variable with the namea, b

// You have to find the sum ofsum1 and sum2, such that

// sum1 = a*a + 10

// sum2 = b*b*b + 12

// Print the sum of sum1 and sum2


// Input
// The first and the only line of the input contains the value stored ina, brespectively


// Output
// Print the sum ofsum1 and sum2, as shown in the problem statement


// Sample Input 1 

// 2 3
// Sample Output 1

// 53
// Hint

// In the sample test case, the value stored ina = 2, and the value stored inb = 3

// Therefore, the value ofsum1 = a*a + 10 = 2*2 + 10 = 4 + 10 = 14

// Similarly, the value ofsum2 = b*b*b + 12 = 3*3*3 + 12 = 27 + 12 = 39

// Therefore, the sum ofsum1 + sum2 = 14 + 39 = 53, which is the required output




function cubesAndSquares(a,b) {
    
    sum1 = a*a + 10
    
    sum2 = b*b*b + 12
    console.log(sum1+sum2)
    }
    
