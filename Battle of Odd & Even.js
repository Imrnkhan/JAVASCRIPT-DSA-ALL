// Battle of Odd & Even Ended
// Description

// You are given an arrayarrofNintegers.

// You need to printOdd, if thesum of all odd numberspresent in the array is greater thansum of all the even numberspresent in the array, or else printEven.


// Input
// Input Format :

// First line contains N which is the number of elements present in the array.

// Second line contains N space separated integers which are the elements of array.



// Constraints :

// 1 <= N <= 100

// 1 <= arr[i] <= 100


// Output
// Print either "Odd" or "Even" depending upon the condition mentioned above.


// Sample Input 1 

// 4
// 1 2 3 4
// Sample Output 1

// Even
// Hint

// Output Explanation :

// Odd numbers present are 1 and 3, whose sum is 4

// Even numbers present in array are 2 and 4, whose sum is 6

// Since 6>4, Even is the required output.






function battleOfOddAndEven(n, arr){
    //write code here
    var even = 0;
var odd = 0;
for(var i = 0; i < arr.length; i++) {
      if(arr[i]%2 === 0) {
          even += arr[i];
     } else {
          odd += arr[i];
     }
}
if(odd > even) {
        console.log("Odd");
} else {
       console.log("Even");
}
}
