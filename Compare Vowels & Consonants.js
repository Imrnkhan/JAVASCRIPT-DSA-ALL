// pare Vowels & Consonants Ended
// Description

// You are given a string stored in a variablestr, whose length is stored in a variable with the nameN

// You have to find the count of vowels and consonants in the string, and print the output according to the following conditions

// 1. If the count of vowels is equal to the count of consonants, print "Tie", without quotes

// 2. Else If the count of vowels is greater than the count of consonants, print "Vowel", without quotes

// 3. Else If the count of vowels is lesser than the count of consonants, print "Consonant", without quotes
// For example, consider the value stored inN = 6, andstr = "nrupul". Then the count ofvowels = 2, and the count ofconsonants = 4. Since, the count of consonants is greater than the count of vowels, therefore the required output isConsonant`
// Note : The string only contains lower case English Alphabets

// Input
// The first line of the input contains the value stored inN

// The second line contains the value stored instr


// Output
// Print the output as per the conditions mentioned in the problem statement

// Sample Input 1 

// 6
// nrupul
// Sample Output 1

// Consonant
// Hint

// In the sample test case, the value stored inN = 6, andstr = "nrupul". Then the count ofvowels = 2, and the count ofconsonants = 4. Since, the count of consonants is greater than the count of vowels, therefore the required output isConsonant`




function compareVowelsConsonants(N, str) {
    var vow = 0;
    var con = 0;
    for(i=0;i<str.length;i++){
    if(str[i]==="a" || str[i]==="e" || str[i]==="i" || str[i]==="o" || str[i]==="u"){
    vow++
    }
      else {
      con++
      }
     
    }
    if(vow==con){
    console.log("Tie")
    }
    else if(vow>con){
    console.log("Vowel")
    }
    else if(con>vow){
    console.log("Consonant")
    }
    
  }
  
