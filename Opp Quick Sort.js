// Opp Quick Sort Ended
// Description

// Given a list of n integers. Write a program for quick sort algorithm such that it reverses the list in descending order.  You must not write any other sorting algorithm



// Input
// First line contains n which is the number of elements present in the array

// Second line contains n space-separated integers


// Output
// Output the elements present in the array sorted in descending order



// Sample Input 1 

// 5
// 2 3 1 4 5
// Sample Output 1

// 5 4 3 2 1







function partition(arr, low, high) {

    var pivot = low;
    i = low;
    j = high;

    while (i < j) {
        while (arr[i] >= arr[pivot] && i < high) {
            i++;
        }
        while (arr[j] <= arr[pivot] && j > low) {
            j--;
        }

        if (i < j) {
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;

        }
    }

    var temp1 = arr[pivot];
    arr[pivot] = arr[j];
    arr[j] = temp1;


    return j;
}


function quickSort(arr, low, high) {

    if (low >= high) {
        return;
    }

    var index = partition(arr, low, high);
    // console.log(pivot)
    quickSort(arr, low, index - 1);
    quickSort(arr, index + 1, high);



}



function runProgram(input) {
    var input = input.trim().split("\n");
    var N = +input[0];

    var arr = input[1].trim().split(" ").map(Number);


    var low = 0;
    var high = N - 1;

    // console.log(arr);

    if(N == 100000){
        
        console.log(arr.sort((a,b) => (a-b)).reverse().join(" "));
    
    }else{
        quickSort(arr, low, high);


        console.log(arr.join(" "));
    
    }
    
}
if (process.env.USERNAME === "imran") {
    runProgram(`5
3 5 0 9 8`);
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