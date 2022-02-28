// Fizzz buzzz Ended
// Description

// You are given a number stored in a variable with the namenum

// For all numbers in the range[1,num], including num

// 1. If the number is divisible by 3 and 5 both, print "FizzBuzz" without quotes

// 2. Else If the number is divisible by 3, print "Fizz", without quotes

// 3. Else If the number is divisible by 5, print "Buzz", without quotes

// 4. Else, print the number as it is 


// Input
// TThe first line contains the value stored in the variablenum


// Output
// Print the required output, according to the conditions shown in the problem statement


// Sample Input 1 

// 3
// Sample Output 1

// 1
// 2
// Fizz
// Hint

// The value stored innum = 3. Therefore, all the values in the range from[1,3]are printed. Since, the number3is divisible by3, therefore, instead of writing 3, we writeFizz

// Hence, the output becomes

// 1
// 2
// Fizz

function fizzBuzz(num) {
    for(var a=1;a<=num;a++){
      
    if(a%3===0 && a%5===0){
    console.log("FizzBuzz")
    }
      else if (a%3===0){
      console.log("Fizz")
      }
      else if(a%5===0){
      console.log("Buzz")
      }
      else {
      console.log(a)
      }
    }
  }
  fizzBuzz(3)