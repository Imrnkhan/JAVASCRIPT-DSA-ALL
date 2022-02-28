// Easy Wood Cutter Ended
// Description

// You are given a number, stored in a variable with the nameN. Check if the the number is divisible by 3 or not

// If its possible, print "Yes"

// Else print "No"

// Hint : A number can be divided into 3 parts, if the number is completely divisible by 3, that is, the answer of the operation number % 3 is zero


// Input
// Input Format :

// First line contains length of wood : N



// Constraints :

// N < 1000


// Output
// Print Yes/No based on the length


// Sample Input 1 

// 6
// Sample Output 1

// Yes



function easyWoodCutter(N) {
    // Write code here
    if(N%3==0)
    console.log("Yes");
    else
    console.log("No");
}