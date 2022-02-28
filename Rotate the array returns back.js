// Rotate the array returns back Ended
// Description

// You are given an array of n elements and an integer k, you need to rotate the array by k units.



// Input
// First-line contains t, which is the number of test cases

// For each test cases, first-line has n & k - the number of elements in the array and the number of times the array has to be rotated

// The second line of each test case contains n numbers which represent the elements of the array

// Constraints

// 1<=T<=20

// 1<=N<=50000, 0<=K<=1000000000

// 1 <= Ai <= 1000000


// Output
// out put N elements, elements of the array , rotated by K units



// Sample Input 1 

// 3
// 2 1
// 1 2
// 2 2
// 1 2
// 3 1
// 1 2 3
// Sample Output 1

// 2 1
// 1 2
// 3 1 2





function rotate_it(arr, n, k) {
    k = k % n
    var cur_index = n - k
    if (cur_index == n) {
    cur_index = 0
    }
    var new_arr = []
    for (var i = 0;i < n;i ++) {
    new_arr.push(arr[cur_index])
    cur_index = (cur_index + 1) % n
    }
    console.log(new_arr.join(' '))
    }
    function doit(input) {
    var lines = input.trim().split('\n')
    var line = 0
    var t = parseInt(lines[line])
    line ++
    while (t > 0) {
    // n k
    // 1 2 3 4 5 56
    var testcase_line1 = lines[line].trim().split(' ')
    var testcase_line2 = lines[line + 1].trim().split(' ')
    var n = parseInt(testcase_line1[0])
    var k = parseInt(testcase_line1[1])
    var arr = []
    for (var i = 0;i < n;i++) {
    arr.push(parseInt(testcase_line2[i]))
    }
    rotate_it(arr, n, k)
    line += 2
    t--
    }
    }
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
    read += input;
    });
    process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    doit(read)
    })
