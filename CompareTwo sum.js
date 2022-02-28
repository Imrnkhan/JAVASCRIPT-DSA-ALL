function twoSumsOneNumberII(one, two, three, four, five, six) {
    // Write code here
  var sum1 = one + two;
  var sum2 = four + five;
  if(sum1>three && sum2>six)
    console.log("Yes");
  else{
    console.log("No");
  }
}
twoSumsOneNumberII(1,2,3,4,5,6)