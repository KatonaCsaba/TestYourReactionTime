function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
	  color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
  }
  
  
	function makeShapeAppear() {
	  var left = Math.random() * 400;
	  var top = Math.random() * 400;
	  var width = Math.random() * (200 - 50) + 50;
	  var height = Math.random() * (200 - 50) + 50;
	  document.getElementById("shape").style.top =top + "px";
	  document.getElementById("shape").style.left = left + "px";
	  document.getElementById("shape").style.display="block";
	  document.getElementById("shape").style.width = width + "px";
	  document.getElementById("shape").style.height = height + "px";
	  document.getElementById("shape").style.backgroundColor = getRandomColor();
	  start = new Date().getTime();
	}
  
	function appearAfterDelay() {
	  setTimeout(makeShapeAppear, Math.random() * 2000);
	}
  
  var start = new Date().getTime();
	document.getElementById("shape").onclick = function() {
  
	  document.getElementById("shape").style.display = "none";
  
	  var end = new Date().getTime();
  
	  var time = (end - start) / 1000;
  
	   document.getElementById("timeTaken").innerHTML = time +"s";
		appearAfterDelay();
	}