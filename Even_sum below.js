// Even Sum Below N Ended
// Description

// You are given a number, stored in a variable with the namenum

// Find the sum of all even numbers greater than zero, and less than or equal to the value stored innum

// For example, if the value stored innum = 5, then all the even numbers smaller than or equal to 5, and greater than zero are

// 2
// 4
// Therefore, the sum becomes,sum = 2 + 4 = 6, which is the required output


// Input
// The first and the only line of input contains the number stored in the variablenum


// Output
// Print the sum of all even numbers greater than zero, and less than or equal to the value stored innum


// Sample Input 1 

// 6
// Sample Output 1

// 12
// Hint

// In the sample test case, the value stored innum = 6

// Therefore, all the values smaller than or equal to the value stored innum, and greater than zero are

// 2 
// 4
// 6
// Therefore, the value of sum becomes,sum = 2 + 4 + 6 = 12, which is the required output


function evenSumBelowN(num) {
    // Write code here
    sum = 0;
    for(var i = 2;i<=num;i++){
        if(i%2===0)
        sum= sum+i
    }
          console.log(sum)

}
evenSumBelowN(6)

// function evenSumBelowN(num) {
//   var sum = 0;
//   var a = 2;
//   while(a<=num){
//   sum = sum + a;
//     a=a+2;  
//   }
//   console.log(sum)
// }