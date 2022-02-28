// Cart Total Ended
// Description

// You are given two arrays, both of given sizeN

// The first array represents the price of commodities present in your cart, represented by the variable nameprice

// The second array represents the quantity of each commodity that you need, represented by the variable namequantity

// You have to find the total price of the commodities present in the cart

// For example, consider the value stored inN = 3, and the first array isprice = [100,20,40], and the second array isquantity = [2,1,2]

// Then, the required cart total will be

// Cart Total = (100 * 2 + 20 * 1 + 40 * 2) = (200 + 20 + 80) = 300
// Therefore, the required output will be 300

// Input
// The first line of the input contains the value stored inN

// The next line containsNspace separated integers denoting the values stored in thepricearray

// The next line containsNspace separated integers denoting the values stored inquantityarray


// Output
// Print the total cart value, as shown in the problem statement

// Sample Input 1 

// 3
// 100 20 40
// 2 1 2
// Sample Output 1

// 300
// Hint

// In the sample test case, the value stored inN = 3, and the first array isprice = [100,20,40], and the second array isquantity = [2,1,2]

// Then, the required cart total will be
// Cart Total = (100 * 2 + 20 * 1 + 40 * 2) = (200 + 20 + 80) = 300
// Therefore, the required output will be 300






function cartTotal(N, price, quantity) {
    var total = 0;
    for(var i = 0;i<N;i++){
      total +=(price[i]*quantity[i])
      }
    console.log(total)
    
  }
  
