// Masai Packers & Movers Ended
// Description

// Finally, India found the vaccine, and things have started getting normal. Offices are opening up, and therefore, you have to shift to Bangalore. Now, to transport your stuff, you hire Masai Packers & Movers. The company has N trucks, and each truck can hold only a certain amount of weight only. Also, because of surge in prices of Fuel, the company has implemented a new policy, that the truck will be granted to the customer, only if the truck is completely occupied, and no extra space is left.

// You have to transport K units of weight, since each truck will take the weight exactly equal to its capacity, find the number of ways, in which you can transport K units of weight.

// Note : Any truck can be sent any number of times.


// Input
// The first line contains K and N, the weight of the stuff you can transport, and the number of trucks available. The next line contains N space separated integers, denoting the capacity of each truck.



// Constraints

// 1 <= K <= 40

// 1 <= N <= 7

// 1 <= A[i] <= 10


// Output
// Print a single integer denoting the number of ways, in which you can transport your stuff to Bangalore.


// Sample Input 1 

// 3 3
// 1 2 3
// Sample Output 1

// 4
// Hint

// In the sample test cases, the company has 3 trucks. The first truck has a capacity of 1, the second has a capacity of 2, and the third truck has a capacity of 3 units. The total weight to be transported is 3 units. The number of ways in which the weight can be transported is

// (1,1,1) -> The first truck is sent thrice, to transport 3 units of weight.

// (2,1) -> First, the truck with capacity 2 is sent followed by the truck with capacity 1.

// (1,2) ->First, the truck with capacity 1 is sent followed by the truck with capacity 2.

// (3) -> The truck with capacity 3 is sent alone.

// Therefore, the total number of ways the weight can bedelivered is 4.





function runProgram(input) {
    input = input.trim().split('\n')
    var[k, n] = input[0].trim().split(' ').map(Number)
    var arr = input[1].trim().split(' ').map(Number)
    console.log(count_it(arr, k))
}
function count_it(arr,n ) {   
    if (n == 0) {
        return 1
    }
    if (n < 0) {
        return 0
    }
    let ans = 0
    for (let i = 0;i < arr.length;i++) {
        ans += count_it(arr, n - arr[i])
    }
    return ans
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




