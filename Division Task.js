// Division Task Ended
// Description

// You are given a number N.

// Let’s say you derive a variablexwhich is equal to the floor of a number you get when32is divided byN.

// In casexis 0, printToo Low
// In case it is not possible to generate a valid number, print-1
// In all other cases, printx.

// Input
// Input Format :

// First line contains N


// Constraints :

// 1 <= N <= 100


// Output
// Output string or number based on the conditions mentioned above.


// Sample Input 1 

// 4
// Sample Output 1

// 8
// Sample Input 2 

// 3
// Sample Output 2

// 10
// Hint

// When 32 is divided by 4, answer is 8. Floor value of 8 is 8. So x is 8.

// As per our conditions we need to print the number itself, so we print 8.



// When 32 is divided by 3, answer is10.66. Floor value of 10.66 is 10. So x is 10.

// As per our conditions we need to print the number itself, so we print 10.




function divisionTask(N) {
    // Write code here
    if(N==0){
        console.log(-1)
    }
      else{ 
        
    var s= Math.floor(32/N)
    
    if(s>0){
    console.log(s)
    
    }else{
        
        
        console.log("Too Low")
    }
    
}
    }

