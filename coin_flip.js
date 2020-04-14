function play(){
       var audio = document.getElementById("audio");
       audio.play();
}

function coinFlip() {
//		function flip(){
//				return Math.floor((Math.random() * 2) + 1)
//		}
//		var result = flip();
		var result = 1;
		if (result === 1){
			document.getElementById("coin").src="images/heads.png";
			document.getElementById("maski").innerHTML = "са задължителни!";
		} else if (result === 2) {
			document.getElementById("coin").src="images/tails.png";
			document.getElementById("maski").innerHTML = "не са задължителни!";
		}
	}
