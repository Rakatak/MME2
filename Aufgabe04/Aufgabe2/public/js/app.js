/**
 * @author Robin Steller
 */
 window.onload = function (){

	 var invertBool = false;
	 var blurBool = false;
	 var playBool = false;
	 
	 function consoleMsg() {
		 console.log("Hello MME2, How you doin'?");
	 }
 	 consoleMsg()

	
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
	
	document.getElementById("playBut").onclick=function(){	
		if (playBool == false) {
			document.getElementById("amon").play();
			document.getElementById("playBut").textContent = "Pause";
			playBool = true;
		} else if (playBool == true) {
			document.getElementById("amon").pause();
			document.getElementById("playBut").textContent = "Play";
			playBool = false;
		}
	};
	
	document.getElementById("stopBut").onclick=function(){	  
		document.getElementById("amon").pause();
		document.getElementById("amon").currentTime = 0;
		document.getElementById("playBut").textContent = "Play";
		playBool = false;
	};
	
	document.getElementById("amon").onclick=function(){	  
		document.getElementById("amon").webkitRequestFullscreen();
		
	};
	
	
	//setting the Time Clock
	setInterval(function(){
				var time    = document.getElementById("amon").currentTime;
				var seconds = Math.floor(time % 60 );
				var minutes = Math.floor(time / 60 );
				var hours   = Math.floor(time / 3600);
				
				if (seconds < 10 ) {
					document.getElementById("SS").textContent = "0" + seconds.toString();
				} else {
					document.getElementById("SS").textContent = seconds.toString();
				}
				
				if (minutes < 60) {
					document.getElementById("MM").textContent = "0" + minutes.toString();
				} else {
					document.getElementById("MM").textContent = minutes.toString();
				}
				
				if (hours < 60) {
					document.getElementById("HH").textContent = "0" + hours.toString();
				} else {
					document.getElementById("HH").textContent = hours.toString();
				}
				updateProgress();
	});
	
	function updateProgress() {
		var bar = document.getElementById("progressBar");
		var percentage = Math.floor((100 / document.getElementById("amon").duration) * document.getElementById("amon").currentTime);
		
		bar.value = percentage;
		bar.innerHTML = percentage;
		
	}
	
	document.getElementById("progressBar").addEventListener('click', function(e) {
		var x = e.clientX - 407;
		var percentage = x / 520;
		var result = document.getElementById("amon").duration * percentage;
		
		document.getElementById("amon").currentTime = result;
		
		
	}, false);

	
	
	
 }