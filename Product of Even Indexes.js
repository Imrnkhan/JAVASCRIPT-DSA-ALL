// Product of Even Indexes Ended
// Description

// You are given an array, whose size is stored in a variable with the nameN

// The array is stored in a variable with the namearr

// You have to find the product of all the elements of the array, which are stored at even indexes

// For example, consider the value stored inN = 4, and the value stored inarr = [1,2,3,4]. Then, the elements stored at even indexes are1,3, therefore, the product becomes1*3 = 3, which is the required answer

// Note : Indexing in the array starts from 0

// Input
// The first line of the input contains the value stored inN

// The next line containsNspace separated integers denoting the value stored inarr


// Output
// Print the product of all the elements in the array which are stored at even indexes

// Sample Input 1 

// 4
// 1 2 3 4
// Sample Output 1

// 3
// Hint

// In the sample test case, the value stored inN = 4, and the value stored inarr = [1,2,3,4]. Then, the elements stored at even indexes are1,3, therefore, the product becomes1*3 = 3, which is the required answer





function productOfEvenIndexes(N, arr) {
    var product = 1;
    for(i=0;i<arr.length;i++){
      if(i%2==0){
      product=(product*arr[i])
      }
    }
    console.log(product)
  }