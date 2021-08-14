var x = 1;
var y = 1;


var map = {
	"1.1":"rd", 
	"1.2":"dl", 
	"2.1":"ur", 
	"2.2":"lur",
	"2.3":"x"
};

up = document.querySelector(".up");
right = document.querySelector(".right");
down = document.querySelector(".down");
left = document.querySelector(".left");
winner = document.querySelector(".winner");

up.addEventListener("click", function() {
	  x =  x - 1;
	  xy();
});

left.addEventListener("click", function() {
	  y =  y - 1;
	  xy();

});

down.addEventListener("click", function() {
	  x =  x + 1;
	  xy();
});

right.addEventListener("click", function() {
	  y =  y + 1;
	  xy();
});

function xy(){
	console.log(x+"."+y);
	// console.log(map[x+"."+y]);

	up.style.visibility = "hidden";
	right.style.visibility = "hidden";
	down.style.visibility = "hidden";
	left.style.visibility = "hidden";
	winner.style.visibility = "hidden";

	if(map[x+"."+y].includes("u") ){
		up.style.visibility = "visible";
	}
	if(map[x+"."+y].includes("l") ){
		left.style.visibility = "visible";
	}
	if(map[x+"."+y].includes("d") ){
		down.style.visibility = "visible";
	}
	if(map[x+"."+y].includes("r") ){
		right.style.visibility = "visible";
	}
	if(map[x+"."+y].includes("x") ){
		console.log("you won");
		winner.style.visibility = "visible";
	}
}

xy();