// Detect Palindrome II Ended
// Description

// You are given a string S. Find if the string, can be converted into a palindrome.

// You are free to rearrange the string in any way you want. Rearrangement refers to the fact that the characters can be arranged in any way in the string.

// Deletion or addition of characters is not allowed.


// Input
// The first line contains T, the number of test cases.

// The first line of each test case contains N, the length of the string.

// The next line contains the string.

// Constraints

// 1 <= T <= 10

// 1 <= N <= 100


// Output
// If the string can be rearranged into a palindrome, print "Possible!", else print "Not Possible!".


// Sample Input 1 

// 2
// 6
// aabbcc
// 5
// aabcd
// Sample Output 1

// Possible!
// Not Possible!
// Hint

// In the first sample test case, the string can be rearranged as "acbca", which is a palindrome.

// In the second sample test case, the string cannot be rearranged into a palindrome.





function detectPalII(N, string){
    //write code here
    var obj = {}
    count =  0;
    for(var i = 0; i<N;i++){
       if(obj[string[i]]==undefined ) obj[string[i]]=1;
       else obj[string[i]]++
    } 
    for(var key in obj ){
        if(obj [key]%2==1)
        count++
        
    }
    if(count<=1)
    console.log("Possible!")

    else{
        console.log("Not Possible!")
    }
    
    

}
