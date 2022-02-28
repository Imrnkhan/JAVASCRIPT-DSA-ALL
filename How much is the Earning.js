// How much is the Earning? Ended
// Description

// Noddy choosed a city for Advertising his company's product. There are *S* streets in that city. Each day he travels one street. There are *N* buildings in a street which are located at points 1,2,3....N(respectively). Each building has some height(Say h meters).

// Noddy stands at point 0. His height is 0.5m. Now he starts communicating with the people of each building. He can communicate with people of a particular building only if he can see that building. If he succeed to communicate with any particular building then his boss gives him R rupees. i.e. if he communicates with K buildings in a day, then he will earn K times R rupees. Now Noddy wants to know his maximum Earning for each day.

// Note: All the points are on Strainght Line and Noddy is always standing at point 0.


// Input
// Input Format

// First line of input contains an integer S, denoting no of streets in the city.

// Details for each street is described in next two lines.

// First line contains two integers N and R denoting no of buildings in the Street and earning on communicating with a building.

// Second line contains N integers, denoting height of building.



// Constraints

// N <= 10000

// h <= 1000000000

// S <= 100

// R <= 10000


// Output
// Output Format

// Print S Lines, each containing maximum earning in i-th street.


// Sample Input 1 

// 2
// 6 3
// 8 2 3 11 11 10
// 5 12
// 12 20 39 45 89
// Sample Output 1

// 6
// 60
// Hint

// Sample 1 Explanation

// There are two streets in the city.

// The first street has 6 buildings and the earning of Napoleon for communicating with each building is 3 rupees.

// Height of buildings are 8 2 3 11 11 10 respectively.

// As Noddy is standing at point 0, he will be able to see only 1st and 4th building.

// So his total earning will be 3*2 = 6 in that street

// Similarly for 2nd street his earning will be 60 rupees







function runProgram(input) {
    input = input.split("\n")
    var t = +input[0];
    var line = 1
    for(var i = 0; i < t; i++){
        var [M,K] = input[line].split(" ").map(Number)
        line++
    
        var arr = input[line].split(" ").map(Number)
        line++
        Earning(M,K,arr)
  
      }
  function Earning(M,K,arr){
      var max = arr[0];
      var count = 1;
      for(var i = 0;i<M;i++){
          if(arr[i]>max){
              max=arr[i]
              count++;
          }
      }
      console.log(count*K)
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

