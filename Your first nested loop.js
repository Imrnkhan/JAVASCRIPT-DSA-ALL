// Your first nested loop Ended
// Description

// You are given a number, stored in a variable with the namenum

// You have to printnumlines, and on each line print all the numbers from 1 to the value stored innum

// For example, if the value stored innum = 5, then the required output is

// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5

// Input
// The first and the only line of the input contains the value stored innum


// Output
// Print the output as mentioned in the problem statement


// Sample Input 1 

// 4
// Sample Output 1

// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
// Hint

// In the sample test case, the value stored innum = 4

// Therefore, we print 4 lines, and on each line we print all the values from[1,4]

// Hence, the output will be

// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4

function yourFirstNested(num) {
    str = "";
        for(var i = 1;i<=num;i++){
            for(var j = 1;j<=num;j++){
                str = str+j+" "
               
                
            }
             str+= "\n"
            
        }
        console.log(str)
    }
    