// Make Leaderboard Ended
// Description

// You are given name and marks of N different students in a hackerrank contest. Your task is to write a program that makes leaderboard of the students under following conditions:

// - If two students get same marks they get same rank

// - The student placed next to the same marks students will get the rank skipping the intermediate ranks.

// Refer to the sample test case for better understanding

// Note : You cannot use built-in sort function. Using that can lead to disqualification. Write your own sorting algorithm


// Input
// Input Format :
// First line of input contains N

// Next N line contains name and marks respectively of N different students (where name and marks is separated by a space)



// Constraints :

// N < 100


// Output
// Output N names with their rank. Follow these rules for generating the list:

// 1. The students having more mark gets better rank

// 2. If students have similar mark, their rank will be same(In case of similar marks, the person whose name comes first in alphabetical order comes first in order. However their rank will be same)

// 3. The student placed next to the same marks students will get the rank skipping the intermediate ranks.


// Sample Input 1 

// 6
// rancho 45
// chatur 32
// raju 30
// farhan 28
// virus 32
// joy 45
// Sample Output 1

// 1 joy
// 1 rancho
// 3 chatur
// 3 virus
// 5 raju
// 6 farhan






function runProgram(input){
    data=input.trim().split("\n")
    lines=Number(data[0])
    datas=[]
    for(var i=0;i<lines;i++){
        [name,mark]=data[i+1].trim().split(" ")
        temp={name:name,marks:+mark}
        datas.push(temp)
    }
    rank_maker(datas)
    
}

function sort_by_name(datas){
   for(i=0;i<datas.length;i++){
        for(j=0;j<datas.length-i-1;j++){
            str1=datas[j].name
            str2=datas[j+1].name
            if(str1>str2){
                temp=datas[j]
                datas[j]=datas[j+1]
                datas[j+1]=temp
            }
            
        }    
   } 
 return datas;
}

function sort_by_marks(datas){
   for(i=0;i<datas.length;i++){
        for(j=0;j<datas.length-i-1;j++){
            str1=datas[j].marks
            str2=datas[j+1].marks
            if(str1<str2){
                temp=datas[j]
                datas[j]=datas[j+1]
                datas[j+1]=temp
            }
            
        }    
   } 
 return datas;
}


function rank_maker(datas){
    
    datas=sort_by_name(datas);
    datas=sort_by_marks(datas);

    rank=1
    crank=1
    for(var i=0;i<datas.length-1;i++){
            
            console.log(rank,datas[i].name)
            crank++;
            if(datas[i+1].marks<datas[i].marks){
                rank=crank;
            }

    }
    
            if(datas[datas.length-1].marks<datas[data.length-2].marks){
                console.log(crank,datas[datas.length-1].name)
            }
            else{
                    console.log(rank,datas[datas.length-1].name)
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