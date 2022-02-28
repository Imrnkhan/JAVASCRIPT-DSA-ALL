// Your First Pattern Ended
// Description

// You are given a number stored in a variable with the namen

// You have to printnlines, and on each line you have to printnstars

// For example, consider the value stored inn = 4. Then, the required output will be

// * * * *
// * * * *
// * * * *
// * * * *

// Input
// The first and the only line of the input contains the value stored in the variablen


// Output
// Print the pattern as shown in the problem statement


// Sample Input 1 

// 5
// Sample Output 1

// * * * * * 
// * * * * * 
// * * * * * 
// * * * * * 
// * * * * * 
// Hint

// In the sample test case, the value stored inn = 5. Therefore, the required output is

// * * * * * 
// * * * * * 
// * * * * * 
// * * * * * 
// * * * * * 

function yourFirstPattern(n) {
    str  = ""
    for(var i = 1;i<=n;i++){
        for(var j = 1;j<=n;j++){
            str = str +"* "
            
        }
        str = str +"\n"
    }
        console.log(str)
    }
    