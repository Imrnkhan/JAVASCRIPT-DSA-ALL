// Transpose the Matrix Ended
// Description

// The transpose of a matrix is an operator which flips a matrix over its diagonal, that is it switches the row and column of the matrix by producing another matrix.

// See sample test case for better understanding

// So, given an array of n rows and m columns, generate the transpose of the matrix.


// Input
// Input Format:

// First line contains two integers n and m

// Next n lines contain m integers which represents each row of 2d array

// Constraints:

// n,m <= 500


// Output
// Print the transposed array


// Sample Input 1 

// 5 4
// 0 0 0 0
// 1 1 1 1
// 2 2 2 2
// 3 3 3 3
// 4 4 4 4
// Sample Output 1

// 0 1 2 3 4 
// 0 1 2 3 4 
// 0 1 2 3 4 
// 0 1 2 3 4 
// Hint

// Transpose the Matrix- Editorial
// Difficulty: Low
// Prerequisite: 2-D Arrays,Implementation
// Problem Statement:
// The transpose of a matrix is an operator which flips a matrix over its diagonal, that is it switches the row and column of the matrix by producing another matrix.

// See sample test case for better understanding

// So, given an array of n rows and m columns, generate the transpose of the matrix.

// Hint:
// None.

// Short Explaination
// In this question, we are given a 2-D array, of size nxm. We have to generate the transpose of the matrix. Another array of size mxn, can be used to generate the transpose of the matrix. In the transpose of the matrix, the rows and columns are swithced. Therefore, the dimensions of the new array are swapped as that of the original array. Then, the entire matrix is traversed, and values are stored in the new array accordingly. Finally, the new matrix is returned.

// Detailed Explanation:
// A 2-D array of size nxm, refers to the fact that the array has n rows and m columns. In this question, we have to print the transpose of matrix. As described in the question, The transpose of a matrix is an operator which flips a matrix over its diagonal, that is it switches the row and column of the matrix by producing another matrix. Referthisfor better understanding. As the matrix is flipped over its diagonal, therefore the dimensions of the matrix of are reversed. Therefore, to store the transpose of matrix of dimension nxm, a new matrix of dimension mxn, is to be declared. From the image, it must be clear that the indexes of the elements are also swapped. Therefore, the element which was (i,j) in the original matrix,will be placed at (j,i), in the transposed matrix. This is done for all elements in the array. Finally, the transposed matrix is to be returned.

// Pseudo Code
//     * int n //number of rows
//     * int m //number of columns
//     * int[][] arr //input array
//     * int[][] transpose // this array stores the transpose of the matrix
//     * for (int i=0;i<n;i++)
//         * for (int j = 0;j<m;j++)
//             * transpose[j][i] = arr[i][j] //notice the indiced being swapped
//     * return transpose.








function transposeTheMatrix(N, M, matrix){
    //write code here
    
    for(var j = 0;j<M;j++){
        s = "";
        for(i = 0;i<N;i++){
            s+=matrix[i][j]+" ";
        }
            console.log(s);

    }
  
}
