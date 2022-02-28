// Apply Basic Maths Ended
// Description

// You are given an arrayAwithNelements. You are allowed toremove only one element, which makes thesum of all the remaining elements exactly divisible by 7.

// Your task is to find thefirst index of smallest elementthat can be removed from array. If there is no answer print-1.


// Input
// Input Format

// The first line contains a single integerN.

// Next line contains N space separated integers A[k] , (0 <= k < N).

// Constraints

// 1 <N< 100000

// 0 <A[k]< 1000000000


// Output
// Output Format

// Print a single line containing one integer, the first array index of the smallest element that CAN be removed, and -1 if there is no such element that he can remove!


// Sample Input 1 

// 5
// 14 7 8 2 4
// Sample Output 1

// 1
// Hint

// Sample 1 Explanation

// Both 14 and 7 are valid answers, but since 7 is the smallest, the required array index is 1.






function applyBasicMaths(N,A){
    //write code here
    
      var min = Infinity
    for(i = 0; i < A.length;i++){
        var sum = 0
        for(j = 0;j < A.length;j++){
            if(j == i){
                continue
            }else{
                sum += A[j]
            }
        }
        if(sum % 7 == 0){
            if(min > A[i]){
                min = A[i]
            }
        }
    }
    console.log(A.indexOf(min))

    
    

}


