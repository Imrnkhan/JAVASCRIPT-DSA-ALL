// New Year Celebration Ended
// Description

// New Year Celebration is coming near and DG is hosting a party for it, To make sure the party goes well she wants order in the party.There are two counters one of ice-cream and other for Cold-drinks.

// On ice-cream counter the line was formed in form of Queue and on drinks counter the line was formed in order of Stacks.

// She gave the management of the party to NV, NV made a plan to ask the manager following types of query.

// Query types:

// 1 X : Number X enter the Queue.

// 2 X : Number X enter the Stack.

// 3: Output whoever is in-front of the queue.

// 4: Output whoever is on-top of the stack

// 5: Which person is in-front of queue get out of queue and enters the stack.

// Note: If the Queue or Stack is empty then output "-1"


// Input
// Input Format :

// The first line of input will contain Q, which is the number queries.

// The next Q lines will different queries based upon query types given.



// Constraints :

// 1<=Q<=10^5

// 1<=X<=10^9


// Output
// Output will consist of integers based upon Query types.If Query type is 3 then Output whoever is in-front of the queue, if Query type is 4 Output whoever is on-top of the stack.


// Sample Input 1 

// 7
// 1 4
// 2 3
// 1 2
// 3
// 4
// 5
// 4
// Sample Output 1

// 4
// 3
// 4







function runProgram(input) {
	input=input.split("\n");
	var tc=+input[0];
    var queue=[];
    var stack=[];
	for(var i=1;i<=tc;i++){
	  var [num,m]=input[i].split(" ").map(Number);
	  	if(num==1){
	  	    queue.push(m)
	  	}
	  	else if(num==2){
	  	    stack.push(m)
	  	}
	  	else if(num==3){
	  	    
	  	    if(queue.length==0){
	  	        console.log(-1)
	  	    }
	  	    else{
	  	     console.log(queue[0])
	  	    }
	  	    
	  	}
	  	else if(num==4){
	  	if(stack.length==0){
	  	    console.log(-1)
	  	}
	  	else{
	  	    console.log(stack[stack.length-1]);
	  	    
	  	}
	  	
	  	}
	  	else if(num==5){
	  	  stack.push(queue.shift())
	  	}
	  	}
	  	
	
}

if (process.env.USERNAME === "") {
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