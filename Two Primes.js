// Two Primes Ended
// Description

// You are given two numbers, stored in variables with the following namesa, b

// If both the numbers are prime, printTrue, else printFalse


// Input
// The first and the only line of input contains the value stored ina, brespectively


// Output
// Print the output as explained in the problem statement


// Sample Input 1 

// 11 17
// Sample Output 1

// True
// Hint

// In the sample test case, the value stored ina = 11, and the value stored inb = 17. Since, both the numbers are prime, we printTrue



function twoPrimes(a,b) {
    //write code here
    var num = a,b
    isPrime = true
    for(var i = 2;i<num;i++){
    if(num%i==0){
        isPrime = false
}
}
if(isPrime){
    console.log("True")
}
else{
    
console.log("False")
    }
}
