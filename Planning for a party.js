// Planning for a party Ended
// Description

// Jim and Pam are inviting friends for a party. But, they want to invite only those friends who have helped them in any way. So, they have made two arrays, indicating the number of people they have taken help from. Each person, has been assigned a unique ID, in the form of a number.

// Both, Jim and Pam make their separate invite listAandBbased on the number of people, they have taken help from. Find out if the lists created by the two of them are same or not.

// Note: A person might have helped them multiple times, and obviously would be invited only once


// Input
// The first line of the input containsN, the number of people Pam has taken help from

// Next line containsNspace separated integers, indicating the ID's of the people, Pam has taken help from

// The next line containsM, the number of people Jim has taken help from

// Next line containsMspace separated integers, indicating the ID's of the people, Jim has taken help from

// Constraints

// 1 <=N, M<= 10000

// 1 <=A[i], B[i]<= 10000


// Output
// For each test case, printYes, if the lists created by Jim and Pam are same, else printNo


// Sample Input 1 

// 6
// 1 2 2 3 4 5
// 6
// 1 2 3 4 5 5
// Sample Output 1

// Yes
// Sample Input 2 

// 5
// 1 2 2 3 4 
// 6
// 1 2 3 4 5 5
// Sample Output 2

// No
// Hint

// In the first sample test case, the list created by Pam is1 2 3 4 5, while the one created by Jim is1 2 3 4 5. Since, both of them are equal, therefore, the answer isYes

// In the second sample test case, the list created by Pam will be1 2 3 4, while the one created by Jim is1 2 3 4 5. Since, both of them are not equal, therefore, the answer isNo





function runProgram(input) {
    input = input.split("\n")
    var n = +input[0]
    var narr = input[1].split(" ").map(Number)
    var m = +input[2]
    var marr = input[3].split(" ").map(Number)
    array(n,narr,m,marr)
}
function array(n,narr,m,marr){
    narr.sort((c,d) =>{ return c-d})
    marr.sort((c,d) =>{ return c-d})
    var a =[]
    for(var i = 0; i < n;i++){
        a.push(narr[i])
        if(a[a.length-2] == a[a.length-1]){
            a.pop()
        }
    }
    var b = []
    for(var i = 0; i < m;i++){
        b.push(marr[i])
        if(b[b.length-2] == b[b.length-1]){
            b.pop()
        }
    }
    var z = true
    for(var i = 0; i < a.length ;i++){
        if(a[i] != b[i]){
            z = false 
            break
        }
    }
    if(z == true){
        console.log("Yes")
    }else {
        console.log("No")
    }
}

if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}