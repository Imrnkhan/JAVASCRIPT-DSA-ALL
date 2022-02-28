// Two Sums One Number Ended
// Description

// You are given five numbers, stored in the variables with the following names

// one, two, three, four, five

// Find the value ofsum1andsum2, such that

// sum1 = one + two 

// sum2 = three + four

// If the value of both sum1 and sum2 is greater than the value stored in variablefive, printYes, else printNo


// Input
// The first and the only line of the input contains the value stored in variablesone, two, three, four, fiverespectively


// Output
// PrintYes, if the value ofsum1andsum2is both greater than the value stored infive, else printNo


// Sample Input 1 

// 1 2 3 4 5 
// Sample Output 1

// No
// Hint

// In the sample test case, the value stored inone = 1, two = 2, three = 3, four = 4, five = 5

// Therefore, the value of

// sum1 = one + two = 1 + 2 = 3

// sum2 = three + four = 3 + 4 = 8

// In this case, the value of sum1 is lesser than the value stored in five, even though the value stored in sum2 is greater than the value stored in five. Therefore, the output isNo





function twoSumsOneNumber(one, two, three, four, five) {
    // Write code here
      
var sum1 = one+two
var sum2 = three+four
if(sum1>five && sum2>five)
console.log("Yes");
else {
  console.log("No");
}

}
