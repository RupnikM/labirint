var c=document.getElementById("canvas");
var ctx=c.getContext("2d");
var slider = document.getElementById("sliderVelikost");
var button = document.getElementById("button");

const img = new Image();
img.src = 'img/maze.svg';
var hitrot= 2;
var newhirtsot=2;


var pointsX=[
234,234,250,250,282,282,314,314,298,298,330,330,346,346,330,330,346,346,362,362,394,394,362,362,346,346,330,330,314,314,298,298,266,266,282,282,266,266,250,250,234,234,218,218,186,186,122,122,154,154,170,170,202,202,186,186,170,170,154,154,138,138,122,122,138,138,122,122,106,106,42,42,26,26,42,42,58,58,74,74,42,42,26,26,10,10,26,26,10,10,26,26,90,90,74,74,42,42,58,58,90,90,122,122,106,106,122,122,138,138,186,186,202,202,218,218,202,202,218,218,234,234,202,202,186,186,170,170,154,154,218,218,234,234,250,250,266,266,282,282,314,314,330,330,346,346,362,362,378,378,362,362,330,330,362,362,426,426,410,410,442,442,426,426,410,410,426,426,410,410,394,394,378,378,362,362,378,378,314,314,266,266,250,250
];

var pointsY=[
2,10,10,42,42,74,74,90,90,106,106,122,122,138,138,170,170,154,154,138,138,170,170,186,186,202,202,218,218,202,202,186,186,202,202,266,266,282,282,250,250,234,234,202,202,186,186,218,218,202,202,218,218,234,234,266,266,282,282,266,266,298,298,330,330,346,346,362,362,330,330,298,298,282,282,266,266,250,250,234,234,218,218,234,234,250,250,266,266,330,330,346,346,362,362,378,378,394,394,410,410,378,378,394,394,410,410,458,458,474,474,458,458,442,442,426,426,410,410,378,378,362,362,378,378,362,362,378,378,314,314,298,298,314,314,298,298,314,314,298,298,330,330,346,346,330,330,346,346,314,314,298,298,234,234,266,266,314,314,330,330,378,378,362,362,410,410,458,458,474,474,458,458,474,474,442,442,426,426,442,442,458,458,482
];
var st=0;
var down=true;
var redo=false;
var x=pointsX[st];
var y=pointsY[st];
const width=12;
ctx.fillStyle = 'hsl('+ 360*Math.random() +',100%,50%)';
ctx.beginPath();
function draw(){
	//console.log("hitrost",hitrot);
	ctx.drawImage(img,0,0);
	karl();
	console.log("sss");
	ctx.rect(x-width/2, y-width/2, width, width);
	ctx.fill();
	
	if(y>=pointsY[pointsY.length-1]&&down){//pride spodi
		ctx.closePath();
			//console.log(y,pointsY[0],y<=pointsY[0],st,down,"prde");
		down=false;
		x=pointsX[pointsX.length-1];
		y=pointsY[pointsY.length-1];
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.fillStyle = 'hsl('+ 360*Math.random() +',100%,50%)';
		ctx.beginPath();

	}
	else if(y<=pointsY[0]&&!down){//pride navrh
		//console.log(y,pointsY[0],y<=pointsY[0],st,down);
		
		ctx.closePath();
		
		down=true;
		x=pointsX[0];
		y=pointsY[0];
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.fillStyle = 'hsl('+ 360*Math.random() +',100%,50%)';
		ctx.beginPath();
		
	}
	else if(redo){
				//console.log("reset");
		ctx.closePath();
		st=0;
		down=true;
		x=pointsX[0];
		y=pointsY[0];
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.fillStyle = 'hsl('+ 360*Math.random() +',100%,50%)';
		ctx.beginPath();
		redo=false;
	}
}1

function karl(){ //premikanje
	if(x<pointsX[st]){
		x += hitrot;
	}
	else if(x>pointsX[st]){
		x -= hitrot;
	}
	else if(y<pointsY[st]){
		y += hitrot;
	}
	else if(y>pointsY[st]){
		y -= hitrot;
	}
	else if(down&(x==pointsX[st]||y==pointsY[st])){
		st++;
	}
	else if(!down&(x==pointsX[st]||y==pointsY[st])){
		st--;
	}
}
setInterval(draw, 10);

slider.oninput = function() {
  newhirtsot=Math.pow(2,this.value);
}
function newHitrost(){
	hitrot=newhirtsot;
	redo=true;
}