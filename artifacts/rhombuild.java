function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
	top(pHeight, pColorEven, pColorOdd, pSymbol);
	bottom(pHeight, pColorEven, pColorOdd, pSymbol);

	}

	function top(pHeight, pColorEven, pColorOdd, pSymbol){
	var rLine ="";
		for (i=0;i<pHeight;i++){
		rLine +="<p>"; //Create each line on the Rhombus
          for(h=pHeight;h>i;h--){ 
			System.out.print("&nbsp;");
          }
          for (j=0;j<i;j++) { 
            if (h%2) { //even
				rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
			} else { //odd
				rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";
			}
		}	
		document.getElementById("top").innerHTML = rLine;
	}
      
    function bottom(pHeight, pColorEven, pColorOdd, pSymbol){
	var rLine ="";
      for (i=0;i<pHeight;i++){
      rLine +="<p>"; //Create each line on the Rhombus
        for(j=0;j<i;j++){ 
			System.out.print("&nbsp;");
          }
        for(h=pHeight;h>i;h--){ 
          if (j%2) //even
          rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
          else //odd
          rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";
        }
      rLine +="</p>"; // console.log(rLine);
      }

	document.getElementById("bottom").innerHTML = rLine;
	}
}
