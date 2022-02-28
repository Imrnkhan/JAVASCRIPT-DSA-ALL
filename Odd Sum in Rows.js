// Odd Sum in Rows Ended
// Description

// You are given a 2D array, whose dimensions are stored in two variables with the nameNandM

// The value stored inNdenotes the number of rows, and the value inMdenotes the number of columns

// The 2D array is stored in a variable with the namearr

// For all rows, you have to print the sum of odd elements present in the row

// For example, consider the value stored inN = 3,M = 3, and the array isarr = [1,2,3],[4,5,6],[7,8,9], then the required output will be

// 4  (Odd numbers in the row are, [1,3]. Therefore, the sum becomes 4)
// 5  (Odd numbers in the row are, [5]. Therefore, the sum becomes 5) 
// 16 (Odd numbers in the row are, [7,9]. Therefore, the sum becomes 16)


// Input
// The first line of the input contains the value stored inNandM

// The nextNlines containMvalues each denoting the value stored inarr


// Output
// For each row, print the sum of even numbers present in the row, line by line

// Sample Input 1 

// 3 3
// 1 2 3
// 4 5 6
// 7 8 9
// Sample Output 1

// 4
// 5
// 16
// Hint

// In the sample test case, the value stored inN = 3,M = 3, and the array isarr = [1,2,3],[4,5,6],[7,8,9], then the required output will be

// 4  (Odd numbers in the row are, [1,3]. Therefore, the sum becomes 4)
// 5  (Odd numbers in the row are, [5]. Therefore, the sum becomes 5) 
// 16 (Odd numbers in the row are, [7,9]. Therefore, the sum becomes 16)




function oddSum(arr) {
    sum = 0;
    for (let j = 0; j < arr.length; j++) {
        const elm = arr[j];
        if (elm % 2 == 1) {
            sum += elm;
        }
    }
    return sum;
}
function oddSumRows(N, M, arr) {
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        console.log(oddSum(element));
    }
}



