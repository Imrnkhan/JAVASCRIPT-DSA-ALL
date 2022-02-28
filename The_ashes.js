
// The Ashes! (But One day) Ended
// Description

// You are given two numbers, scored in variables with the following names

// Australia, England

// If the following expression is true

// Australia > England, print "Australia"

// else if the following expression is true

// Australia < England, print "England"

// else if the following expression is true

// Australia == England, print "Tie"


// Input
// Input Format :

// First and the only line contains 2 space separated integers denoting scores of Australia and England respectively.



// Constraints :

// Both score <450


// Output
// Output one string(either Australia or England) which is the name of Winning team


// Sample Input 1 

// 46 67
// Sample Output 1

// England




function theAshes(Australia, England) {
    //Write code here
    if(Australia > England){
        console.log("Australia")
    }else if(Australia < England){
        console.log("England")
    }
    else if(Australia == England){
        console.log("Tie")
    }
}
theAshes(46,47)