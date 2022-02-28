// Sum of Rows Ended
// Description

// You are given a 2D array, whose dimensions are stored in two variables with the nameNandM

// The value stored inNdenotes the number of rows, and the value inMdenotes the number of columns

// The 2D array is stored in a variable with the namearr

// You have to print the sum of all elements in a row, on a new line

// For example, consider the value stored inN = 3,M = 2, and the array isarr = [1,2],[3,4],[5,6], then the required output will be

// 3 (Adding the elements of the row [1,2])
// 7 (Adding the elements of the row [3,4])
// 11(Adding the elements of the row [5,6])

// Input
// The first line of the input contains the value stored inNandM

// The nextNlines containMvalues each denoting the value stored inarr


// Output
// Print the sum of each row, on a new line. You have to do this for all rows of the matrix

// Sample Input 1 

// 3 2
// 1 2 
// 3 4
// 5 6
// Sample Output 1

// 3
// 7
// 11
// Hint

// In the sample test case, the value stored inN = 3,M = 2, and the array isarr = [1,2],[3,4],[5,6], then the required output will be

// 3 (Adding the elements of the row [1,2])
// 7 (Adding the elements of the row [3,4])
// 11(Adding the elements of the row [5,6])



function sumOfRows(N, M, arr) {
    for (let index = 0; index < N; index++) {
        const element = arr[index];
        console.log(element.reduce((a, b) => a + b, 0));
    }
}
