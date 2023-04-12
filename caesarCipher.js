alert
function rot13(str) {
    let solution="";
    for(let i=0; i <str.length; i++){
    let asciiNum = str[i].charCodeAt()
    if(asciiNum >= 65 && asciiNum <= 77){
      solution += String.fromCharCode(asciiNum + 13);//true for letters which are not between 65-77(A-M)
    }else if(asciiNum >= 78 && asciiNum <= 90){
      solution +=String.fromCharCode(asciiNum - 13);//true for letters which are not between 78-90(N-Z)
    }
    else{
      solution += str[i];// true for letters which are not between 65-90
    }
    }
    return solution;
  }
  
  console.log(rot13("SERR PBQR PNZC"));