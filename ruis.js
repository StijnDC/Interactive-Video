function GenerateNoise(width, height, opacity){

	var canvas = document.getElementById("ruis");
	// canvas.style.visibility = "visible";
	canvas.style.display ="block";
	ctx = canvas.getContext('2d');
	var x,y;
	
	//var oldheight = canvas.height;
	
	canvas.width = width;
	canvas.height = height;
	
	for(x = 0; x < canvas.width; x+=5){
		for(y = 0; y < canvas.height; y+=5){
			//random grijswaarde genereren
			var rnd = Math.floor(Math.random()*15 +1)*17;
			ctx.fillStyle = 'rgba(' + rnd + ',' + rnd + ',' + rnd + ',' + opacity + ')';
			ctx.fillRect(x,y,5,5);
		}
	}
	
	window.setTimeout(function (){
		//canvas.height = oldheight;
		canvas.style.display ="none";
		
	},20);
	
	
}

// function clearCanvas(){
	// var canvas = document.getElementById("ruis");
	
	// canvas.style.visibility = "hidden";

	// canvas.style.display ="block";
// }


var tijd = 0;
var interval;
function playNoise() {
    var video = document.getElementById("video1");
    console.log(video);
    var width = video.offsetWidth;
    console.log(width);
    var height = video.offsetHeight;
    console.log(width);
    
    
	console.log("ruis afspelen");
	interval = setInterval(
	function(){
		noiseAnimation(width, height);

	},20);
	

	
	
}

function noiseAnimation(width, height) {

	tijd+=15;
	GenerateNoise(width, height, 0.5);

	if(tijd >= 45){
		clearInterval(interval);
		tijd = 0;
		//clearCanvas();
	}
}
