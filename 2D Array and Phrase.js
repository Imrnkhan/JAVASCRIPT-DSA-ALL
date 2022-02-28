// 2D Array and Phrase Ended
// Description

// You are given an arraymatrixofnrows andmcolumns which contains lower case English letters.

// How many times does the phrase "saba" appear horizontally, vertically, and diagonally in the grid?

// OJ2.png


// Input
// Input Format

// First line: Two integer n and m, where n denotes the number of rows and m denotes the number of columns in the grid

// Next n lines: Each line contains m characters which contains lower-case English letters only

// Constraints

// 1 <= n,m <= 100


// Output
// Output Format

// Print the number of times the word “saba” appears in the grid.


// Sample Input 1 

// 5 5
// safer
// amjad
// babol
// aaron
// songs
// Sample Output 1

// 2
// Hint

// 2D Array and Phrase - Editorial
// Difficulty: Low
// Prerequisite: Sorting, Arrays
// Problem Statement:
// You are given an array of n rows and m columns which contains lower case English letters. How many times does the phrase "saba" appear horizontally, vertically, and diagonally in the grid.Referthisfor better understanding.

// Hint:
// For each point in the matrix, you can either move in the horizontal direction, or in the vertical direction, or along the diagonals.

// Short Explaination
// In this question,we are given a 2D array, and we have to find how many times, the word "saba", occurs in the matrix. We can check along the vertical direction, or the horizontal direction,or along the diagonals. A general approach would be to for each character in the matrix, to check along the horizontal direction, along the vertical direction, and along the diagonals. Care should be taken to make sure that, the bouncdaries are not crossed, as it will throw an exception. A variable count will be used to find the count of number of times, the required string is formed. Finally,we print count.

// Detailed Explanation:
// In this question, we are given a matrix of characters, and we are required to find out the number of times, the word "saba", can be formed using the characters of the matrix, by exploring the matrix, horizontally, vertically,or along the diagonals.For each index in the matrix, we can try to formulate the string in the horizontal direction, or in the vertical direction, or along the diagonasls. An import point regardind diagonals is, if we are exploring a particula row from left to right, there can be two directions in which the diagonals can be extended, one pointed up and towards right, and the other one pointing down and towards right. Care must be taken that at no point of time, the boundaries of the matrix are not crossed, as it will throw an array out of bounds exception.

// Pseudo Code
// * int n,m // dimensions of the matrix
// * arr[][] //character matrix given as input 
// * int count = 0 //keeps track of the number of instances where string formed is equal to "saba".
// * for (int i=0;i<n;i++)
//     * for (int j=0;j<m;j++)
//         * if (j<m-3)
//             * String temp = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i][j+3] //horizontal traversal
//             * if (temp == "saba") count++
//         * if (i<n-3)
//             * String temp = arr[i][j] + arr[i+1][j] + arr[i+2][j] + arr[i+3][j] //vertical traversal
//             * (temp == "saba") count++
//         * if (i<n-3 && j<m-3)
//             * String temp = arr[i][j] + arr[i+1][j+1] + arr[i+2][j+2] + arr[i+3][j+3] //diagonal traversal right and down
//             * if (temp == "saba") count++
//         *if (i>=3 && j<m-3)
//             * String temp = arr[i][j] + arr[i-1][j+1] + arr[i-2][j+2] + arr[i-3][j+3] //diagonal traversal right and up
//             * if (temp == "saba") count++
// * print count









function twoArrayAndPhrase(n, m, arr){
    //write code here
     count = 0;
    s = 'saba'
    
    for (var i = 0;i < n;i++) {
        for (var j = 0;j <= m - 3;j++) {
            sum = "";
             sum+= arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i][j+3]
            if (sum == s) {
                count ++
            }
        }
    }
   
    for (var j = 0;j < m;j++) {
        for (var i = 0;i <= n - 4;i++) {
            sum = "";
            sum+= arr[i][j] + arr[i+1][j] + arr[i+2][j] + arr[i+3][j]
            if (sum == s) {
                count ++
            }
        }
    }
     
    for (var i = 0;i < n-3;i++) {
        for (var j = 0;j <= m - 3;j++) {
            sum = "";
             sum += arr[i][j] + arr[i+1][j+1] + arr[i+2][j+2] + arr[i+3][j+3]
            if (sum == s) {
                count ++
            }
        }
    }
    for (var i=n-1;i>=3;i--) {
        for (var j = 0;j <=m -4;j++) {
            sum = "";
            sum += arr[i][j]+ arr[i-1][j+1] + arr[i-2][j+2] + arr[i-3][j+3]
            if(sum==s)
            {
              count++
            

            }
        }
    }
    console.log(count)
}

