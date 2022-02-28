// String value! Ended
// Description

// Given a stringSof all lowercase letters and each letter has a value of its own.

// The value of the alphabetais1,b is 2,c is 3..... tillz is 26.

// Now you have to find the total value of the given string. The total value of a string is the sum of values of all characters present in string.



// Input
// Input Format

// The first and only line of input contains the StringS.

// Constraints

// 1 <= Length of S <= 1000


// Output
// Print the value of string.


// Sample Input 1 

// aba
// Sample Output 1

// 4
// Hint

// Sample 1 Explanation

// For example, Consider the Stringaba

// Here, the first characterahas a weight of1, the second characterbhas2and the third characteraagain has a weight of1.

// So the sum of stringabahere is equal to : 1 + 2 + 1 = 4.





function stringValue(S) {
    //write code here
    var alpha = "abcdefghijklmnopqrstuvwxyz"
    input = "abc"
    sum = 0;
    for(var i = 0;i<alpha.length;i++){
        for(var j = 0; j<S.length;j++){
            if(alpha[i]==S[j])
            sum+=i+1
        }
    }
  console.log(sum);
  
  }
  


