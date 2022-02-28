// Apply Brakes Ended
// Description

// You are given two numbers stored in the variable with the names

// distance, time

// Find the value of speed, such that,

// speed = distance/time

// If the following expression is true


// speed > 40, print "Apply Brake"

// else

// print "Keep Going"

// Print the statements, without quotes


// Input
// Input Format

// First line contains 2 space separated integers where the first integer represents the distance travelled by car and second represents time taken to cover that distance.

// Constraints

// Distance < 1000

// time taken < 5


// Output
// Output a string depending on the speed of the car


// Sample Input 1 

// 100 2
// Sample Output 1

// Apply Brake



function applyBrakes(distance, time) {
    //Write code here
    speed = distance/time
    
    if(speed > 40)
    console.log("Apply Brake");
    else
    console.log("Keep Going");
}
