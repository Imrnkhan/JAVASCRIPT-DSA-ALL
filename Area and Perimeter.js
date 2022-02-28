// Area and Perimeter Ended
// Description

// You are given the sides of the rectangle 1: L1 and B1 and sides of the rectangle 2 : L2 and B2.

// You need print if area of rectangle 1 is greater than rectangle 2.

// You need print if perimeter of rectangle 1 is greater than rectangle 2.


// Input
// The first line of each test case contains two space-separated integers L1, B1, L2, B2 , the length and breadth of the rectangle1 andthe length and breadth of the rectangle2.

// Constraints

// 1 <= L1, B1, L2, B2 <= 100


// Output
// Print(Area of rectangle 1 > Area of rectangle 2)

// Print(Perimeter of rectangle 1 >Perimeter of rectangle 2)


// Sample Input 1 

// 1 2 2 3
// Sample Output 1

// false
// false




function areaAndPerimeter(L1,B1,L2,B2) {
    //write code here
    a1 = L1*B1;
    a2 = L2*B2;
    console.log(a1>a2);
    
    p1 = 2*(L1+B1);
    p2 = 2*(L2+B2);
    console.log(p1>p2);
}