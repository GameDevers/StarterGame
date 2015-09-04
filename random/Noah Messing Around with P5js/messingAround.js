var w;
var columns;
var rows;
var board;
var next;

function setup(){
	canvas = createCanvas(window.innerWidth, window.innerHeight);
	w = 20;
	columns = floor(width/w);
	rows = floor(height/w);
	board = new Array(columns);
	for(var i = 0; i < columns; i++){
		board[i] = new Array(rows);
	}
	next = new Array(columns);
	for (var i = 0; i < columns; i++) {
		next[i] = new Array(rows);
	}
	init();
}

function init(){
	//zero out the arrays
	for (var i = 0; i < columns; i++) {
		for (var j = 0; j < rows; j++) {
			board[i][j] = 0;
			next[i][j] = 0;
		}
	}

	//set start location of green and red
	var x1 = floor(random(columns));
	var y1 = floor(random(rows));
	board[x1][y1] = 1; //greens number
	//make sure green and red don't start on the same spot
	while(true){
		var x2 = floor(random(columns));
		var y2 = floor(random(rows));
		if(x2 != x1 && y2 != y1){
			board[x2][y2] = 2; //reds color
			break;
		}
	}

	while(true){
		var x3 = floor(random(columns));
		var y3 = floor(random(rows));
		if(x3 != x1 && y3 != y1 && x3 != x2 && y3 != y2){
			board[x3][y3] = 3; //reds color
			break;
		}
	}

	while(true){
		var x4 = floor(random(columns));
		var y4 = floor(random(rows));
		if(x4 != x1 && y4 != y1 && x4 != x2 && y4 != y2 && x4 != x3 && y4 != y3){
			board[x4][y4] = 4; //reds color
			break;
		}
	}

	while(true){
		var x5 = floor(random(columns));
		var y5 = floor(random(rows));
		if(x5 != x1 && 
			y5 != y1 && 
			x5 != x2 && 
			y5 != y2 && 
			x5 != x3 && 
			y5 != y3 &&
			x5 != x4 &&
			y5 != y4){
			board[x5][y5] = 5; //reds color
			break;
		}
	}

	while(true){
		var x6 = floor(random(columns));
		var y6 = floor(random(rows));
		if(x6 != x1 && 
			y6 != y1 && 
			x6 != x2 && 
			y6 != y2 && 
			x6 != x3 && 
			y6 != y3 &&
			x6 != x4 &&
			y6 != y4 &&
			x6 != x5 &&
			y6 != y5){
			board[x6][y6] = 6; //reds color
			break;
		}
	}
}

function draw(){
	background(255);
	nextTurn();
	for (var i = 0; i < columns; i++) {
		for (var j = 0; j < rows; j++) {
			if(board[i][j] == 0){
				fill(0);
			}
			if(board[i][j] == 1){
				fill(255, 0, 0);
			}
			if(board[i][j] == 2){
				fill(0, 255, 0);
			}
			if(board[i][j] == 3){
				fill(0, 0, 255);
			}
			if(board[i][j] == 4){
				fill(255, 255, 0);
			}
			if(board[i][j] == 5){
				fill(0, 255, 255);
			}
			if(board[i][j] == 6){
				fill(255, 0, 255);
			}
			stroke(0);
			rect(i*w, j*w, w-1, w-1);
		}
	}
}

function nextTurn(){
	//loop through the board and check the neighbors
	var turn = true;
	for(var i = 0; i < columns; i++){
		for(var j = 0; j < rows; j++){
				//check for valid cell
			if(board[i][j] != 0){
				//pick a random direction
				var direction = floor(random(4));
				if(direction == 0){ //north
					if(j - 1 >= 0  && board[i][j-1] == 0){ //bounds check && empty cell
						board[i][j-1] = board[i][j];
					}
				}
				if(direction == 1){ //south
					if(j + 1 < rows && board[i][j+1] == 0){ //bounds check && empty cell
						board[i][j+1] = board[i][j];
					}
				}
				if(direction == 2){ //east
					if(i + 1 < columns && board[i+1][j] == 0){ //bounds check && empty cell
						board[i+1][j] = board[i][j];
					}
				}
				if(direction == 3){ //west
					if(i - 1 >= 0 && board[i-1][j] == 0){ //bounds check && empty cell
						board[i-1][j] = board[i][j];
					}
				}
			}
		}
	}
}
	

//handle evnets
//update background
//update player
//draw background
//draw the player