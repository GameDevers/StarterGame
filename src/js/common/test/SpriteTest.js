/*
	this is a test file for Sprtie
*/

var filepath = ["/res/player/test/sprite_test", ".png"];
var sprite = new Sprite(filepath,5);

// function preload(){
// 	sprite = new Sprite(filepath,5);
// }

function setup(){
	createCanvas(720, 480);
	frameRate(60);
}

function draw(){
	image(sprite.currentFrame,720/2,480/2);
	sprite.updateFrame();
}