// Substring under condition Ended
// Description

// You are given a strings, you have to find thecountof all such substrings which start and ends with the same character.


// Input
// Input Format :

// First and the only line contains a strings

// Constraints:

// 1 <= Length of s <= 1000


// Output
// Print the count of total number of such substrings starting and ending with same characters.


// Sample Input 1 

// abcab
// Sample Output 1

// 7
// Hint

// Substrings ofabcabwhich start and end with same characters, area,abca,b,bcab,c,a,b.

// So total count is 7. Hence we print 7.






function subStrUnderCond(s){
    var n = s.length;
    var count = 0;
    for(var i=0;i<n;i++){
        var k=""
        for(var j=i;j<n;j++){
            k=k+s[j]
            var m=k.length;
            if(k[0]==k[m-1]){
                count++
            }
        }
    }
  console.log(count)
  }
  