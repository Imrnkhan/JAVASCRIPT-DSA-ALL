// Compare Four Numbers II Ended
// Description

// You are given four numbers stored in variables with the following names

// one, two, three, four

// If the value of any one of the following expression is true, printYes, else printNo

// 1. one > two 

// 2. three > four


// Input
// The first and the only line of the input contains four numbers, the values stored in the variablesone, two, three, four


// Output
// If any one of the expressions 1 and 2, given in the problem statement is true, printYes, else printNo


// Sample Input 1 

// 1 2 4 3
// Sample Output 1

// Yes
// Hint

// In the sample test case, the value stored inone = 1, two = 2, three = 4, four = 3

// Now, in this case, condition 2, as mentioned in the problem statement is true, but condition 1 is false, as the value stored inoneis lesser than the value stored intwo. Hence, the output isYes




function compareFourNumbersII(one, two, three, four) {
    // Write code here
    if (one > two || three > four)
    console.log("Yes");
    else
    console.log("No");
}