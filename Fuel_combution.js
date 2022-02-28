function enoughFuelConsumption(fuel, distance) {
    var required = fuel*distance ;
    if(required>50){
    console.log("Enough")
    }
    else{
      console.log("Go On")
    }
  }
  enoughFuelConsumption(1,46)