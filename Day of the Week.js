// Day of the Week Ended
// Description

// Given the current day, and a number N, find what day will it be after N days.

// Note:Current day will be from the set ->{"Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"}


// Input
// The first line of the input contains the name of the current day.

// The second line of the input contains N.

// Constraints

// 1 <= N <= 1000


// Output
// Print the name of the day, which will occur after N days.


// Sample Input 1 

// Wednesday
// 8
// Sample Output 1

// Thursday
// Hint

// In the sample test case, the current day is Wednesday. After N = 8 days, it will be Thursday.





function dayOfTheWeek(day, N) {
    //write code here
    var arr = [ "Monday", "Tuesday", "Wednesday", "Thursday" ,"Friday", "Saturday" ,"Sunday" ]
  
  var n =arr.length
  
    for(var i = 0;i<n;i++){
        if(day == arr[i]){
            var d =((N+(i))%7)
            console.log(arr[d])
        }
    }
  }
  

