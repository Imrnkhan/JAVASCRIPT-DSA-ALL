// Masai Palindromic Substring Ended
// Description

// You are provided a stringS.

// Write a program that returns length of the longest palindromic substring of that string.


// Input
// Input Format

// First line contains S, a string.

// Constraints

// `1 <= Length of string <= 100


// Output
// Output Format

// Output one number which is length of the longest substring which is a palindrome


// Sample Input 1 

// thisracecarisgood
// Sample Output 1

// 7
// Hint

// Sample 1 Explanation

// The given string contains a palindromic substring which is, "racecar" and it is of largest length(7) among all other palindromic substrings.

// Hence the output is 7






function masaiPalSubString(S){
    //write code here
    var N = S.length;
    var z =[];
    for(var i = 0;i<N;i++){
        var a = ""
        for(var j = i;j<N;j++){
            a+= S[j]
            var b =a.split('').reverse().join('')
            if(a==b){
                            z.push(a.length);

            }
        }
    }
    console.log(Math.max(...z))
}
