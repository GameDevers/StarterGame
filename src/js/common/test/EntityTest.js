/*
	this is a test file for Entities
*/

var filepath = ["/res/player/test/sprite_test", ".png"];
var entity = new Entity(filepath, 5, 360, 240);

function setup(){
	createCanvas(720, 480);
	frameRate(60);
}

function draw(){
	entity.draw();
	update();
}

function update(){
	entity.update();
}