// Borderless Ended
// Description

// You are given a matrix A of size N X M. Find the sum of all the elements in the matrix which do not lie at the border.


// Input
// The first line of the input contains N and M, denoting the dimensions of the matrix.

// The next N lines contain M space separated integers each, denoting the elements of the matrix.

// Constraints

// 1 <= N, M <= 100

// 1 <= A[i][j] <= 100


// Output
// Print a single integer denoting the sum of all the elements in the matrix, which do not lie at the border.


// Sample Input 1 

// 4 4
// 1 2 3 4
// 5 6 7 8
// 9 10 11 12
// 13 14 15 16
// Sample Output 1

// 34
// Hint

// In the sample test case, the elements which do not lie at the border, are {6,7,10,11}. Therefore, the sum of the elements are => 6 + 7 + 10 + 11 = 34, which is the required answer.



function sumWithoutBorders(N, M, matrix){
    sum = 0;
    for(var i = 1;i<N-1;i++){
        for(var j = 1;j<M-1;j++){
            sum = sum+matrix[i][j]
        }

    }
                        console.log(sum)

  
}
