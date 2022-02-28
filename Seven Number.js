// Seven Numbers Ended
// Description

// You are given 7 numbers A, B, C, D, E, F, G. Find out the product of (A + B + C) and (D + E + F + G).


// Input
// Thefirst and the only line of the input contains A, B, C, D, E, F, and G.

// Constraints

// 1 <= A, B, C, D, E, F, G <= 30


// Output
// Print the value of the expression (A + B + C) * (D + E + F + G)


// Sample Input 1 

// 1 2 3 4 5 6 7
// Sample Output 1

// 132
// Hint

// The value of A = 1, B = 2, C = 3, D = 4, E = 5, F = 6, G = 7, Therefore the sum of (A + B + C) = 6, and that of (D + E + F + G) = 22. Therefore, the product of (A + B + C) and that of (D + E + F + G) is equal to 6 x 22 = 132




function sevenNumber(A, B, C, D, E, F, G) {
    // Write code here
  console.log((A + B + C) * (D + E + F + G));
    
}