// Two & Three Ended
// Description

// You are given a number, stored in a variable with the namenum

// For all numbers in the range of[1,num], including num, print the output according to the following conditions

// 1. If the current number, is divisible by both 2 and 3, i.e. number % 2 == 0 and number % 3 == 0, print "Both", without quotes

// 2. If the number is only divisible by 2, print "Two", without quotes

// 3. If the number is only divisible by 3, print "Three" without quotes

// 4. Else, if the number is not divisible by both 2 and 3, print "None", without quotes

// Print all values on a new line


// Input
// The first and the only line of input contains, the value stored in the variablenum


// Output
// Print the appropriate output, as per the conditions given in the problem statement


// Sample Input 1 

// 6
// Sample Output 1

// None
// Two 
// Three
// Two
// None
// Both
// Hint

// In the sample test case, the value stored innum = 6. Therefore, we consider all the numbers in the range, [1,6]

// Therefore,

// 1 is not divisible by 2 or 3, therefore, the output is None

// 2 is divisible by only 2, therefore, the output is Two

// 3 is divisible by only 3, therefore, the output is Three

// 4 is divisible by only 4, therefore, the output is Two

// 5 is not divisible by 2 or 3, therefore, the output is None

// 6 is divisible by both 3 and 3, therefore, the output is Both 
// Therefore, the final output becomes

// None
// Two 
// Three
// Two
// None
// Both





function twoAndThree(num) {
    for(var i =1;i<=num;i++)
        if(i%2==0 && i%3==0){
            console.log("Both")
        }
       else if(i%2==0){
            console.log("Two")
        }
     else if(i%3==0){
            console.log("Three")
        }
          else if(i%2!==0 && i%3!==0){
            console.log("None")
        }
}
