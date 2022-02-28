// Swap Odd Even Elements Ended
// Description

// You are given an array of characters, stored in a variable with the namearr

// The size of the array is stored in a variable with the nameN

// You have to swap the elements stored at odd and even adjacent indexes, and print the resultant array

// For example, consider the value stored inN = 6, and the array,arr = [A, B, C, D, E, F]

// Therefore, we swap the element at (0,1) index, the element at (2,3) index, the element at (4,5) index

// Therefore, the resultant array becomes[B, A, D, C, F, E]


// Input
// The first line of the input contains the value stored inN

// The next line containsNspace separated characters indicating the values stored inarr


// Output
// Print the array after swapping the elements stored at adjacent even odd indexes, as shown in the problem statement

// Sample Input 1 

// 6
// A B C D E F
// Sample Output 1

// B A D C F E
// Hint

// In the sample test case, the value stored inN = 6, and the array,arr = [A, B, C, D, E, F]

// Therefore, we swap the element at (0,1) index, the element at (2,3) index, the element at (4,5) index

// Therefore, the resultant array becomes[B, A, D, C, F, E]





function swapOddEvenElements(N,arr){
    //write code here
    let ans= "";
    for(var i=0;i<arr.length;i++){
        if(i%2==0){
            [arr[i],arr[i+1]] =[arr[i+1],arr[i]]
            ans+= arr[i]+" "
            
        }
        else{
            ans+= arr[i]+" "
        }
    }
    console.log(ans)

}

