// Count Possible Pairs Ended
// Description

// You are given a system of equations:

// x^2 + y = n

// y^2 + x = m

// You have to count, how many there are pairs of integers (x, y) (0 ≤ x, y) which satisfy the system.


// Input
// Input Format :

// A single line contains two integers n, m

// Constraints :

// 1 ≤ n, m ≤ 1000


// Output
// On a single line print the count


// Sample Input 1 

// 9 3
// Sample Output 1

// 1
// Hint

// Output Explanation :

// In the first sample the suitable pair is integers (3, 0)






function countPossiblePairs(n, m) {
    var count = 0;
    for(var x = 0 ; x <= n ;x++){
        for(var y = 0 ; y <= m ; y++){
            if((x**2 + y == n) && (y**2 + x == m)){
                count++
            }
        }
    }
    console.log(count)

}
