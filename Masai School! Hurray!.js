function masaiSchoolHurray(N) {

    for(var i = 1;i<=N;i++){
        if(i%5==0 && i%7==0){
            console.log("Masai School")
        }else if(i%7==0){
            console.log("Masai")
        }else if(i%5==0){
            console.log("School")
        }else{
            console.log("Hurray!")
        }
    }
}
