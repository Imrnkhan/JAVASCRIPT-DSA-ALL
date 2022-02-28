function applyBrakes(distance, time) {
    var speed = distance/time
      if(speed>40){
      console.log("Apply Brake")
      }
    else{
    console.log("Keep Going")
    }
  }
  applyBrakes(100,2)