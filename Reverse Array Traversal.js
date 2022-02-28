// Reverse Array Traversal Ended
// Description

// You are given an array, stored in a variable with the namearr

// The size of the array is stored in a variable with the namesize

// You have to print the reverse traversal of the array

// For example, consider the value stored insize = 4, and the array isarr = [1 2 3 4]. Then, the required output will be

// 4 3 2 1

// Input
// The first line of the input contains the value stored insize

// The next line of the input contains the values stored in the array. All the values are on a single line separated by space


// Output
// You have to print the reverse traversal of the array, as shown in the problem statement

// Sample Input 1 

// 5
// 1 3 2 4 5
// Sample Output 1

// 5 4 2 3 1
// Hint

// In the sample test case, the value stored insize = 5, and the array is given byarr = [1 3 2 4 5]

// Therefore, the reverse traversal of this array will be

// 5 4 2 3 1



function reverseArrayTraversal(n, arr){
    //write code here
    var str = ""
    for(var i = arr.length-1;i>=0;i--){
        str = str +arr[i]+" "
    }
    
    // console.log(str)
    var res= (arr.toString().split(',').reverse().join(' '));

console.log(res)
}



