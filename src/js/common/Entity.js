/*
	This is the Entity class. The idea behind this class is that everything that needs to be drawn
	on a screen should extend this class. Since we are using javascript it should be possible
	to overwrite the default implementation of this file if need be
*/

function Entity(pathForSpriteAssest, numberOfFrames, x, y){
	//take care of extending Sprint
	this.sprite = new Sprite(pathForSpriteAssest, numberOfFrames);

	this.x = x;
	this.y = y;

	//draw the Sprite at x, y to the canvas
	this.draw() = function (){

	}
}