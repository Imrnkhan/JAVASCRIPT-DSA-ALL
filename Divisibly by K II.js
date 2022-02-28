function divisibleByKII(num,k) {
    var sum = 0
    for(var i = 1;i<num;i++){
        if(i%k===1)
        sum =sum+i

    }
                console.log(sum)

}


divisibleByKII(7,2)