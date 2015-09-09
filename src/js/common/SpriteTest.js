/*
	this is a test file for Sprtie
*/

var filepath = ["../../res/player/test/sprite_test", ".png"];
var sprite = new Sprite(filepath,5);
var img;

// function preload(){
// 	img = loadImage("../../../res/player/test/sprite_test1.png");
// }

function setup(){
	createCanvas(720, 480);
	img = loadImage("flower.jpg");
}

function draw(){
	image(img,0,0);

	// image(sprite.imageArray[sprite.imageIndex],720/2,480/2);
	// sprite.nextImage();
}