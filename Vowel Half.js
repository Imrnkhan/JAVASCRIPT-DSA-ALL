// Vowel Half Ended
// Description

// You are given a string, stored in a variable with the namestr. The size of the string is stored in a variableN

// The string contains only small case English alphabets

// You have to printTrue, if more than half the characters in the strings are vowels, else printFalse

// For example, consider the value stored inN = 6, andstr = "aabefe". The number of vowels in the string are4, which is more than half of the length of the string, which isN/2 = 3. Therefore, the required output isTrue

// Note : The value stored in N, will always be even

// Input
// The first line of the input contains the value stored inN

// The next line contains the value stored instr


// Output
// PrintTrueif more than half of the characters in the string are vowels, else printFalse

// Sample Input 1 

// 6
// aabefe
// Sample Output 1

// True
// Hint

// In the sample test case, the value stored inN = 6, andstr = "aabefe". The number of vowels in the string are4, which is more than half of the length of the string, which isN/2 = 3. Therefore, the required output isTrue




function vowelHalf(N, str) {
    var vow = 0
    for(i=0;i<str.length;i++){
      if(str[i]==="a" || str[i]==="e" || str[i]==="i" || str[i]==="o" || str[i]==="u"){
        vow++;
      }
      
      }
    if(N/2<vow){
      console.log("True")
      }
      else{
      console.log("False")
    }
  }