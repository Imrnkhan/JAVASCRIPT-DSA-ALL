// Count Consonant Ended
// Description

// You are give a strings.

// Your task is to write a program that counts the number of consonants (non-vowels characters) present in the string.


// Input
// Input Format:

// First-line contains a stringS

// Constraints:

// 1 <= length of (S) <= 100


// Output
// Output one number which is the count of number of consonants present in the string.


// Sample Input 1 

// masaischool
// Sample Output 1

// 6
// Hint

// For stringmasaischool, vowels are (highlighted in bold)

// masaischool




function countConsonants(s) {
    //write code here
    var ans  = 0;
          for (var i = 0; i < s.length; i++){
              if(s[i]=="a" || s[i]=="e" || s[i]=="i" || s[i]=="o" || s[i]=="u"){
                  continue;
              }else{
                  ans++;
              }
          }
           console.log(ans);
  
  
  // var count = 0
  //   for(i = 0; i < s.length; i++){
  //       if(s[i] == 'a'|| s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u'){
  //     //       continue;
  //     //   }else{
  //           count++
  //       }
  //   }
  //   console.log(count)
  
   }
  