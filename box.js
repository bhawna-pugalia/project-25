class dustbin
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.width=183;
		this.height=200;
		this.wallThickness=20;
		
		this.image=loadImage("dustbin.png")
		this.bottom=Bodies.rectangle(this.x, this.y, this.width, this.wallThickness, {isStatic:true})
		this.left=Bodies.rectangle(this.x-this.width/2, this.y-this.height/2, this.wallThickness, this.height, {isStatic:true})
	    this.right=Bodies.rectangle(this.x+this.width/2, this.y-this.height/2, this.wallThickness, this.height, {isStatic:true})
		
		World.add(world, this.bottom)
		World.add(world, this.left)
		World.add(world, this.right);

	}
	display()
	{
			var posBottom=this.bottom.position;
			var posLeft=this.left.position;
			var posRight=this.right.position;

			

			//push()
			//translate(posLeft.x, posLeft.y);
			rectMode(CENTER)
			//strokeWeight(4);
			//angleMode(RADIANS)
			fill(255)
			//rotate(this.angle)
			rect(posLeft.x, posLeft.y,this.wallThickness, this.height);
			//pop()

			//push()
		    //translate(posRight.x, posRight.y);
			rectMode(CENTER)
			//strokeWeight(4);
			//angleMode(RADIANS)
			fill(255)
			//rotate(-1*this.angle)
			rect(posRight.x, posRight.y,this.wallThickness, this.height);
	        //pop()

			//push()
			//translate(posBottom.x, posBottom.y+10);
			//rectMode(CENTER)
			//strokeWeight(4);
			//angleMode(RADIANS)
			fill(255)
			imageMode(CENTER);
			image(this.image, posBottom.x,posBottom.y+10,this.width, this.height)
			//rect(posBottom.x, posBottom.y,this.width, this.wallThickness);
			//pop()
			
	}

}
