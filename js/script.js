// var url_string = "http://www.example.com/t.html?game=maze1"; //window.location.href
var url = new URL(window.location.href);
var game = url.searchParams.get("game");

if(game == "maze1"){
	console.log("test");

	const maze1 = {
	"1.1":"rd", 
	"1.2":"dl", 
	"2.1":"ur", 
	"2.2":"lur",
	"2.3":"x"
	};

	maze(maze1);

}

if(game == "maze2"){

	const maze2 = {
		"1.1":"rd", 
		"1.2":"dlr", 
		"2.1":"ur", 
		"2.2":"lu",
		"1.3":"x"
	};
	
	maze(maze2);

}

if(game == "maze3"){

	const maze3 = {
		"1.1":"r", 
		"1.2":"r", 
		"1.3":"rd", 
		"1.4":"r", 
		"1.5":"d", 
		"2.1":"rd", 
		"2.2":"ld", 
		"2.3":"ur", 
		"2.4":"rl", 
		"2.5":"lud", 
		"3.1":"u", 
		"3.2":"udr", 
		"3.3":"rl", 
		"3.4":"rld", 
		"3.5":"udl", 
		"4.1":"rd", 
		"4.2":"ul", 
		"4.3":"r", 
		"4.4":"u", 
		"4.5":"ud", 
		"5.1":"ur", 
		"5.2":"lr", 
		"5.3":"ld", 
		"5.4":"r", 
		"5.5":"ul", 
		"6.3":"x"
	};
	
	maze(maze3);

}



function maze(maze){

	var x = 1;
	var y = 1;

	map = maze;

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

}