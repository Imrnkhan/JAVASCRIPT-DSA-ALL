// Map Symbols Ended
// Description

// You are given a number stored in a variable with the nameN

// You have to map the following symbols starting from the valueN

// The mapping is such that the difference between the values of two characters, is 2

// '!','@','#','$','%','^','&','*'

// For example, consider the value stored inN = 10, then the required output will be
// !-10
// @-12
// #-14
// $-16
// %-18
// ^-20
// &-22
// *-24


// Input
// The first and the only line of the input contains the value stored inN

// Output
// Print the mapping for the symbols starting fromN, as shown in the problem statement

// Sample Input 1 

// 20
// Sample Output 1

// !-20
// @-21
// #-22
// $-23
// %-24
// ^-25
// &-26
// *-27
// Hint

// In the sample test case, the value stored inN = 20. Therefore, the required output will be
// !-20
// @-22
// #-24
// $-26
// %-28
// ^-30
// &-32
// *-34



function mapSymbols(N) {
    array = ['!','@','#','$','%','^','&','*'];
    data = {};
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
         data[element] = N;
         N += 2;
    }
    for (key in data) {
        const element2 = data[key];
        console.log(key + '-' + data[key]);
    }
}



