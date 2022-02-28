// Longest Increasing Subarray Ended
// Description

// Given an arrayarrofnintegers.

// You need to find out the length of the longest subarray which is strictly increasing i.e, every element is greater than it's the previous element in that subarray.


// Input
// The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. Then t test cases follow.

// The first line of each test case contains a single integer n (1 ≤ n ≤ 100) — the number of elements in the array A.

// The second line of each test case contains n integers (1 ≤ Ai ≤ 100).


// Output
// For each test case, print the answer: The length of the longest subarray.


// Sample Input 1 

// 2
// 2
// 1 1
// 6
// 1 2 1 2 3 1
// Sample Output 1

// 1
// 3
// Hint

// For Sample Input 1:-

// Subarrays which are strictly increasing are [1] and [1]. So maximum size of sub-array is 1.

// For Sample Input 2:-

// Subarrays which are strictly increasing are [1,2] , [1,2,3] and [1]. So maximum size of sub-array ([1,2,3]) is 3. So answer is 3.




function longestIncSubArr(n, A) {
    //write code here
    
   var i=0
  var ans=1
  for(i=0; i<n; i++)
  {
      var count =1
      for (j=i; j<n; j++)
      {
          if(A[j] > A[j-1]){
              count++ 
          }else{
              break;
      }
     if(count>ans){
       ans=count;
     }
  }
  }
   console.log(ans) 
  }
