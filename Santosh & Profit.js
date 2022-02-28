// Santosh & Profit Ended
// Description

// Santosh is a milk man, and supplies milk to local shops. Due to lockdown, the demand for milk has increased substantially but due to surge in the prices of Petrol & Diesel, he has incurred some loss. Santosh is thinking of someway to maximize this profit. He is a smart man, and hence figures out, that  if he delivers  4 or 8 containers of milk, on each trip ,gives him the maximum return. Therefore, he decides that he will only carry 4 or 8 containers of milk for every delivery. To find the maximum profit that he can get with this arrangement, find the number of ways in which he can deliver N containers of milk, if for each visit he takes only 4 or 8 containers with him.


// Input
// The first line of input contains T, the number of test cases. Each test case consists of a single line N, the number of containers Santosh has to deliver.



// Constraints :

// 1 <= T <= 10

// 0 <= N <= 150


// Output
// For each test case print the number of ways in which Santosh can deliver N containers of milk.


// Sample Input 1 

// 1
// 12
// Sample Output 1

// 3






function runProgram(input) {
    input = input.trim().split("\n")
    var tc = input[0]
    var line = 1
    for(var i = 0;i<tc;i++){
    var n = +input[line]
    line++
    profit(n)
    console.log(profit(n))
    }
  }
  function profit(n){
      if(n==0){
          
      return 1
      }
      if(n<0){
          return 0
      }
          return profit(n-4)+profit(n-8)
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
  