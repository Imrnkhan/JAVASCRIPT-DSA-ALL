function profilePic(L, W, length, width) {
    if(length>L && width>W){
    console.log("Upload")
    }
    else if(length<L){
    console.log("Increase Length")
    }
    else if(width<W){
    console.log("Increase Width")
    }
  }
  profilePic(12,14,8,19)