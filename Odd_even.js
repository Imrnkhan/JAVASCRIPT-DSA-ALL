function oddEvenBoth(one, two) {
    if(one%2===0 && two%2===0){
    console.log("Even")
    }
    else if (one%2===1 && two%2===1){
    console.log("Odd")
    }
    else{
    console.log("Even-Odd")
    }
  }
  oddEvenBoth(3,6)