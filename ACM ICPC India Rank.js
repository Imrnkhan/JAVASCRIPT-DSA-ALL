// ACM ICPC India Rank Ended
// Description

// ICPC (https://icpc.baylor.edu/) is International Collegiate Programming Contest is an algorithmic programming contest for college students. You are provided list of countries in correct ranking. Your task is to write a program that prints the rank of India in ICPC.


// Input
// Input Format:

// First line contains N which is number of countries.

// Next N line contains names of N countries in the order of their ranking.

// Constraints:

// N<1000


// Output
// Output one number which is rank of India in ICPC


// Sample Input 1 

// 5
// Russia
// USA
// Japan
// China
// India
// Sample Output 1

// 5





function ACM_ICPC_India_Rank(N, countriesArr) {
    //write code here
    for(var i= 0;i<N;i++){
        if(countriesArr[i]=="India"){
            console.log(i+1)
        }
    }
  }
  