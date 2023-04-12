alert

function convertToRoman(num) {
    let rom = {
  M: 1000,
  CM:	900,
  D:	500,
  CD:	400,
  C:	100,
  XC:	90,
  L:	50,
  XL:	40,
  X:	10,
  IX:	9,
  V:	5,
  IV:	4,
  I:	1,
  
    }
    let roman ="";
    for(let x in rom){
      console.log(x);
      //console.log("x:",x);
      //console.log("value:", rom[x])
      while(num >= rom[x]){
        roman += x;// each time you add a number, you also need to substrate from num;
        num -= rom[x];
        console.log("num is decreased:",num)
            }
    }
   return roman;
  }
  
  console.log(convertToRoman(36));
  