/**
 * @author Robin Steller
 */
 window.onload = function (){
	 	 consoleMsg()

 var invertBool = false;
 var blurBool = false;
 
 function consoleMsg() {
	 console.log("Hello MME2, How you doin'?");
 }
 

 
 
  document.getElementById("invertBut").onclick=function(){	  
	  if (invertBool == false) {
		  	 document.getElementById("amon").className = "invert";
			 invertBool = true;
	 	 } else {
		  	 document.getElementById("amon").className = "video";
			 invertBool = false;
		 }
	};
	
	
	 document.getElementById("blurBut").onclick=function(){	  
	  if (invertBool == false) {
		  	 document.getElementById("amon").className = "blur";
			 invertBool = true;
	 	 } else {
		  	 document.getElementById("amon").className = "video";
			 invertBool = false;
		 }
	};
  
 }