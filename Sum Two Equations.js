// Sum Two Equations Ended
// Description

// You are given two numbers, stored in a variable with the names,a, b

// You have to find the sum ofXandY, such that

// 1. X = (a*5) + (b*3)

// 2. Y = (a*7) + (b*4)
// Find the value of sum, such thatsum = X + Y


// Input
// The first and the only line of the input contains the value stored in thea, b


// Output
// Print the value of the sum, as explained in the problem statement


// Sample Input 1 

// 2 3
// Sample Output 1

// 45
// Hint

// In the sample test case, the value stored ina = 2, b = 3

// The value of

// X = (2*5) + (3*3) = 10 + 9 = 19

// Y = (2*7) + (3*4) = 14 + 12 = 26
// Therefore, the value ofsum = 19 + 26 = 45, which is the required output




function sumTwoEqs(a, b) {
    // write code here
    var x = (a*5) + (b*3);
    var y = (a*7) + (b*4);
    var sum = (x+y);
    console.log(sum)
    
  }