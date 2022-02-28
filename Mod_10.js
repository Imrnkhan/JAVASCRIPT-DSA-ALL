// Mod of 10 Ended
// Description

// You are given a number stored in a variable with the namenum

// Find the value ofx, such that

// x = num % 10

// Print the answer according to the following conditions

// If 

// x = 0, print `zero`

// x = 1, print 'one'

// x = 2, print 'two'

// x = 3, print 'three'

// x = 4, print 'four'

// x = 5, print 'five'

// x = 6, print 'six'

// x = 7, print 'seven'

// x = 8, print 'eight'

// x = 9, print 'nine'

// It is guaranteed, that the value ofxwill be between[0,9]

// Note : All the values need to be printed without quotes


// Input
// The first and the only line of the input contains the number stored innum


// Output
// Print the answer, according to the respective value ofx, as shown in the problem statement


// Sample Input 1 

// 12
// Sample Output 1

// two
// Hint

// In the problem statement, the value stored innum = 12. Therefore, the value ofx = 12 % 10 = 2

// Therefore, the output, as explained in the problem statement, will betwo

function modeof10(num) {
    // Write code here
 var num; 
var x = (num%10);
switch(x){
  case 0:
console.log("zero")
break;
  case 1:
console.log("one")
break;
  case 2:
console.log("two")
break;
  case 3:
console.log("three")
break;
  case 4:
console.log("four")
break;
  case 5:
console.log("five")
break;
  case 6:
console.log("six")
break;
  case 7:
console.log("seven")
break;
  case 8:
console.log("eight")
break;
  case 9:
console.log("nine")
break;
  case 10:
console.log("ten")
break;
    
 }

  
 }

 modeof10(12)
