// Go in Zig-Zag Ended
// Description

// Given amatrixwithNrows andMcolumns. Print the matrix elements starting from the top right corner and follow a zig-zag pattern.

// Look at the image for better understanding

// Image

// For example, for the above matrix, the required output would be as shown below.

// 5 4 3 2 1 6 7 8 9 1 6 4 5 2 3 7 8 9 1 2.


// Input
// Input Format

// First line contains n and m

// Next n line contains m space separated integers which describe each row of the 2d array

// Constraints

// n,m <=50


// Output
// Print all matrix elements in a single line separated by spaces.


// Sample Input 1 

// 5 5
// 4 7 1 1 7
// 8 9 9 6 1
// 6 4 9 5 1
// 7 7 4 7 7
// 8 6 2 5 5
// Sample Output 1

// 7 1 1 7 4 8 9 9 6 1 1 5 9 4 6 7 7 4 7 7 5 5 2 6 8
// Hint

// Go in Zig-Zag- Editorial
// Difficulty: Low
// Prerequisite: 2-D Arrays,Implementation
// Problem Statement:
// Given a matrix with n rows and m columns. Print the matrix elements starting from the top right corner and follow a zig-zag pattern.

// Look at the image for better understanding

// here

// Hint:
// None.

// Short Explaination
// In this question, we are given a 2-D array, with dimensions nxm,and we have to print the matrix in zig-zag form. For this we have to traverse all the elements, in the matrix, and for the arrays which have the value of row, an even number, we need to print those elements in reverse order.

// Detailed Explanation:
// In this question, we are given a 2D array, of dimension nxm, and we have to print the matrix in zig-zag form. To simplify the problem, a matrix can be considered to be broken down into arrays, where each array, will run from left to right, and the size of each array will be equal to the number of columns. Upon careful observation, we can find that, the arrays which have row value, an even number, need to be printed in reverse(considering zero based indexing), and the arrays for which the row value is odd, are printed the conventional way. The array will be traversed from top to bottom, left to right, for which row values are odd, and right to left, for which row value is even. Referthisimage for better understanding.

// Pseudo Code
// * int n //number of rows
// * int m //number of columns
// * int[][] arr //input matrix
// * for (int i=0;i<n;i++)
//     * if (i%2 == 0) // considering zero based indexing
//         * for (int j=m-1;j>=0;j--) print(arr[i][j])
//     * else 
//         * for (int j=0;j<m;j++) print(arr[i][j])







function goInZigZag(N, M, matrix){
    //write code here
    s = ""
    for(var j = 0;j<N;j++){
        if(j%2==1){
            matrix[j].reverse()
        }
        for(var i = M-1;i>=0;i--){
            s+=matrix[j][i]+" "
            
        }
    }
    console.log(s)

  
}





