/*
	This is the Sprite class. To create on you will have to supply the filepath to the asset
	you want to use for the Sprite, and you need to supply the number of frames that this 
	Sprite will have. This class is used to hold and image or array of images so that
	the Entity it is attached to can draw it to the screen.
*/

function Sprite(imagePath, numOfFrames){
	this.frameArray = new Array(numOfFrames);
	this.currentFrameIndex = 0;
	this.currentFrame = null;

	//fill up the array with frmaes for the multi-framed-sprite
	for(var i = 0; i < numOfFrames; i++){
		this.frameArray[i] = p5.prototype.loadImage(imagePath[0]+(i+1).toString()+imagePath[1]);
	}

	//set the current frame to the first fram in the array
	this.currentFrame = this.frameArray[this.currentFrameIndex];

	/*
		This function is used for sprites that have multiple frames. Every tick the current frame
		of the sprite should be drawn. It also checks to make sure that the index for the images
		loop around to start the fram sequence over.
	*/
	this.nextImage = function (){
		this.imageIndex += 1;
		if(this.imageIndex >= numOfFrames){
			this.imageIndex = 0;
		}
	}

	this.updateImage = function (){
		this.nextImage();
		this.currentImage = this.imageArray[this.imageIndex];
	}
}