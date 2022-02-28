// Unique Gift Ended
// Description

// You are visiting a friend at her housewarming party. When you arrive at her house, you see a queue of people standing outside waiting to go inside. Everybody is holding a present in their hands, and since there aren't many gift shops nearby, most of them end up buying the same gift for her. As more and more people keep joining the queue, you are curious to find the first unique gift in the line. You sit and examine the row after a new person arrives; when he does, you examine the queue from front to back to find out which is the first different gift and add it to your list.

// Note-If after a new person arrives no gift is unique in the queue add '#' to the output


// Input
// The first line contains the number of test cases (t)

// The next t lines contains a string of alphabets arranged randomly, each alphabet represents a unique gift.


// 1 <= length of the string <= 20

// 1<=t<=10000


// Output
// You have to output t stringsafter processing the stream of lowercase alphabets from the input strings


// Sample Input 1 

// 2
// abadbc
// abcabc
// Sample Output 1

// aabbdd
// aaabc#
// Hint

// For the first test case-

// The first person brings gift 'a,' and since it's the first gift, it's unique, so add 'a' to the output. The 2nd person gets 'b' which is unique but still not the first unique gift in the queue, adding 'a' to the output. 3rd person brought 'a' again, and now the first unique gift becomes 'b', so adding it to the output. This process continues until the last person joins the queue.





function runProgram(input) {
    input = input.split("\n")
    var t = +input[0]
   
  for(var i = 1; i <= t; i++){
      var s = input[i]
      var q = []
      var count = {}
      var ans = ""
       
      for(var j = 0; j < s.length; j++){
          var char = s[j]
           
          if(!(char in count)){
              count[char] = 1
          } else {
              count[char]++
          }
          q.push(char)
           
          while(q.length > 0){
              var f = q[0]
              if(count[f] == 1){
                  break;
              }
              q.shift()
          }
          if(q.length === 0){
              ans += "#"
          }else {
              ans += q[0]
          }
      }
      console.log(ans)
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

