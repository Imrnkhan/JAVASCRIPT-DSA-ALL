// Product of Numbers of Array Ended
// Description

// You are given an array, whose size is stored in a variable with the nameN

// The array is stored in a variable with the namearr

// You have to find the product of all the elements of the array

// For example, consider the value stored inN = 4, and the value stored inarr = [1,2,3,4]. Then the required output will be1*2*3*4 = 24, which is the required output


// Input
// The first line of the input contains the value stored inN

// The next line containsNspace separated integers denoting the value stored inarr


// Output
// Print the product of all the elements present inarr

// Sample Input 1 

// 4
// 1 2 3 4
// Sample Output 1

// 24
// Hint

// In the sample test case, the value stored inN = 4, and the value stored inarr = [1,2,3,4]. Then the required output will be `123*4 = 24.






function productOfNumbers(N, arr) {
    //write code here
     var product = 1;
    for(i=0;i<arr.length;i++){
      product=(product*arr[i])
    
    }
    console.log(product)
  
    
  }
  