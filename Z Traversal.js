// Z Traversal Ended
// Description

// Given a square matrix of size N x N. Print the Z traversal of the matrix. Refer the figure given below for better understanding.

// Image


// Input
// The first line of the input contains T, the number of test cases. The first line of each test case contains N, the dimension of the square matrix.

// Next N lines contains N space separated integers, denoting the values of the matrix.

// Constraints

// 1 <= T <= 10

// 1 <= N <= 500

// 1 <= A[i][j] <= 1000


// Output
// For each test case, print the elements that occur in the Z traversal of the matrix, on a new line.


// Sample Input 1 

// 1
// 3
// 1 2 3
// 4 5 6
// 7 8 9
// Sample Output 1

// 1 2 3 5 7 8 9 







function zTraversal(N,arr){
    //write code here
    var a = ""
    var r = arr.length
    var c = arr[0].length
    for (var i = 0;i<1;i++){
        for(var j = 0; j<c-1;j++){
            a+= arr[i][j]+ " "
        }
    }
    for (var i = 0;i<r;i++){
        for(var j =c-1; j>=0;j--){
            if(i+j==r-1){
            a+= arr[i][j]+ " "
            }
            }
    }
for (var i = r-1;i<r;i++){
        for(var j =1; j<c;j++){
           
            a+= arr[i][j]+ " "
}
}
console.log(a)

}
