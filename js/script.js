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
		"1.1":"r", 
		"1.2":"rl", 
		"1.3":"rl", 
		"1.4":"ld", 
		"2.1":"r", 
		"2.2":"rld",
		"2.3":"rld", 
		"2.4":"udl", 
		"3.1":"rd", 
		"3.2":"ul", 
		"3.3":"ud", 
		"3.4":"ud", 
		"4.1":"ud", 
		"4.2":"r",
		"4.3":"lu", 
		"4.4":"u", 
		"5.1":"x" 
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


if(game == "maze4"){

	const maze4 = {
		"1.1":"r",
		"1.2":"ld",
		"1.3":"r",
		"1.4":"lrd",
		"1.5":"lr",
		"1.6":"ld",
		"1.7":"d",
		"1.8":"dr",
		"1.9":"dl",
		"1.10":"d", 
		"2.1":"d",
		"2.2":"udr",
		"2.3":"lr",
		"2.4":"lru",
		"2.5":"ld",
		"2.6":"ud",
		"2.7":"ur",
		"2.8":"udl",
		"2.9":"ur",
		"2.10":"udl", 
		"3.1":"udr",
		"3.2":"ul",
		"3.3":"r",
		"3.4":"rl",
		"3.5":"udl",
		"3.6":"ur",
		"3.7":"ld",
		"3.8":"ur",
		"3.9":"ld",
		"3.10":"ud", 
		"4.1":"ur",
		"4.2":"lr",
		"4.3":"dlr",
		"4.4":"dl",
		"4.5":"ur",
		"4.6":"l",
		"4.7":"ud",
		"4.8":"rd",
		"4.9":"ul",
		"4.10":"u", 
		"5.1":"rd",
		"5.2":"lr",
		"5.3":"ul",
		"5.4":"ur",
		"5.5":"ld",
		"5.6":"rd",
		"5.7":"ul",
		"5.8":"ur",
		"5.9":"lr",
		"5.10":"dl", 
		"6.1":"ud",
		"6.2":"dr",
		"6.3":"dlr",
		"6.4":"lr",
		"6.5":"ul",
		"6.6":"ur",
		"6.7":"lr",
		"6.8":"dl",
		"6.9":"r",
		"6.10":"lud", 
		"7.1":"ud",
		"7.2":"u",
		"7.3":"ur",
		"7.4":"lr",
		"7.5":"lr",
		"7.6":"lr",
		"7.7":"dl",
		"7.8":"ur",
		"7.9":"lr",
		"7.10":"ldu", 
		"8.1":"ur",
		"8.2":"lr",
		"8.3":"ld",
		"8.4":"dr",
		"8.5":"lr",
		"8.6":"l",
		"8.7":"ud",
		"8.8":"rd",
		"8.9":"lr",
		"8.10":"lu", 
		"9.1":"rd",
		"9.2":"lr",
		"9.3":"ul",
		"9.4":"ud",
		"9.5":"dr",
		"9.6":"dl",
		"9.7":"ud",
		"9.8":"ud",
		"9.9":"dr",
		"9.10":"l", 
		"10.1":"ur",
		"10.2":"lr",
		"10.3":"l",
		"10.4":"ur",
		"10.5":"ul",
		"10.6":"ur",
		"10.7":"ul",
		"10.8":"ur",
		"10.9":"url",
		"10.10":"x"
	};
	
	maze(maze4);

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