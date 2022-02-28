// Remove Upper Case Ended
// Description

// You are given a string, stored in a variable with the namestr, while the variableNstores the size of the string

// You have to remove all the characters in the string which are uppercase English Alphabets, and print the resultant string

// For example, consider the value stored instr = "MasAi", and N = 5

// The charactersMandAare uppercase, and hence we remove them. Therefore, the required output becomesasi


// Input
// The first line of the input contains the value stored inN

// The second line of the input contains the value stored instr


// Output
// Print the updated string after removing all the uppercase characters

// Sample Input 1 

// 5
// MasAi
// Sample Output 1

// asi
// Hint

// In the sample test case, the value stored instr = "MasAi", and N = 5

// The charactersMandAare uppercase, and hence we remove them. Therefore, the required output becomesasi




function removeUppercase(N, str) {
    //write code here
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var new_str = "";
    flag = 1;
    for(let i = 0; i<N; i++){
      for(let j = 0; j<26; j++){
        if(str[i] == upper[j]){
          flag = 0;
        }
      }
      if(flag){
         new_str += str[i];
      }
      flag = 1;
    }
    console.log(new_str);
  
  }
  
