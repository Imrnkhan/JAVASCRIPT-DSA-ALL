// The Famous Sum Ended
// Description

// You are given two numbers nand k. The number p iscreated by concatenating the string n k times.

// we need to find thesuper digit ofthe integer p

// We definesuperdigit of an integer pusing the following rules:

// If p has only 1 digit, then itssuperdigit is 1.
// Otherwise, thesuperdigit of p is equal to thesuperdigit of the sum of the digits of p.
// Read the Sample input explanation for better understanding.


// Input
// Input Format

// The first line contains two space-separated integers,n-a string representation of an integerand k-an integer, the times to concatenate nto make p.

// Constraints

// 1 <= n <= 10^100000

// 1 <= k <=10^5


// Output
// Print thesuperdigit sum p


// Sample Input 1 

// 148 3
// Sample Output 1

// 3
// Sample Input 2 

// 123 3
// Sample Output 2

// 9
// Hint

// Sample Input 1 Explanation

// Here n = 148 and k = 3 ,so p = 148148148.

// super_digit(P) = super_digit(148148148) 
//                = super_digit(1+4+8+1+4+8+1+4+8)
//                = super_digit(39)
//                = super_digit(3+9)
//                = super_digit(12)
//                = super_digit(1+2)
//                = super_digit(3)
//                = 3.
// Sample Input 2 Explanation

// Here n = 123 and k = 3 ,so p = 123123123

// super_digit(P) = super_digit(123123123) 
//                = super_digit(1+2+3+1+2+3+1+2+3)
//                = super_digit(18)
//                = super_digit(1+8)
//                = super_digit(9)
//                = 9






function sum_of_digits(s) {
    var sum = 0
    
    for(var i = 0;i < s.length;i++) {
        sum += parseInt(s[i])
    }
    
    return sum + ""
}

function number_of_digits(s) {
    var ct = 0
    
    var ma = {}
    
    for(var i = 0;i < s.length;i++) {
        if (!(s[i] in ma)) {
            ct ++
            ma[s[i]] = 1
        }
    }
    
    return ct
}

function super_digit(p) {
    if (number_of_digits(p) == 1) {
        return p[0]
    }
    
    return super_digit(sum_of_digits(p))
}

function runProgram(input) {
    var [n, ks] = input.split(' ')
    
    var k = parseInt(ks)
    
    if (number_of_digits(n) == 1) {
        console.log(n[0])
    } else {
        console.log(super_digit((sum_of_digits(n) * k) + ""))
    }
}


if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function(input) {
    read += input;
  });
  process.stdin.on("end", function() {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function() {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}


