var canvas = document.querySelector("canvas");
// canvas.height = (window.innerHeight) / 1.6;
canvas.height = 400;
canvas.width = window.innerWidth / 1.2;
var relativeHeight = window.innerHeight - canvas.height;
// console.log(canvas.height);
var interval;
var canvasMidWidth = canvas.width / 2;
var canvasHeight = canvas.height;

var batHeight = canvasHeight - 50;
var c = canvas.getContext("2d");

var ballRow = 50;
var ballColumn = 50;

function first() {
	board();
	bat();
	ball();
	// canvas.addEventListener('click', time);
	// canvas.addEventListener('mousemove', mouse);
}
//NOTE -----------------
function ball() {
	c.beginPath();
	c.fillStyle = "BLUE";
	// c.strokeStyle='blue';
	// c.arc(50, 100, 10, 0, 2 * Math.PI);
	c.fillRect(ballRow, ballColumn, 10, 10);
	c.stroke();
	c.closePath();
	ballMove();
}

function board() {
	for (var i = 0; i <= canvasHeight; i = i + 10) {
		c.beginPath;
		c.fillStyle = "purple";
		c.fillRect(canvasMidWidth - 20, i, 40, 8);
		// c.fill();
		c.closePath();
	}
}

function bat() {
	c.beginPath;
	c.fillStyle = "#C2412D";
	c.fill();
	c.fillRect(0, batHeight, 10, 50);
	c.fill();
	c.closePath();
}

canvas.addEventListener("mousemove", (e) => {
	relativeY = e.clientY;
	// c.beginPath;

	c.fillStyle = "rgb(22, 160, 170)";
	c.fill();
	c.fillRect(0, batHeight, 10, 50);
	batHeight = relativeY - 140;
	bat();
	// console.log(relativeY)
	// ballMove();
});

function ballMove() {
	while (ballRow > 10) {
		c.beginPath();
		c.fillStyle = "rgb(22, 160, 170)";
		// c.strokeStyle='blue';
		// c.arc(50, 100, 10, 0, 2 * Math.PI);
		c.fillRect(ballRow, ballColumn, 10, 10);
		// c.strokeStyle='purple';
		ballRow = ballRow - 50;
		c.stroke();
		c.fillStyle = "purple";
		c.fillRect(ballRow, ballColumn, 10, 10);
		c.stroke();
		c.closePath();
		// console.log(ballRow);
		// if(ballRow<=0)
		// {
		//     break;
		// }
		requestAnimationFrame(ballMove);
		setInterval(ballMove, 1000);
	}
}

document.addEventListener("DOMContentLoaded", first());
