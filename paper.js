class paper
{
	constructor(x,y,r)
	{
		var options={
			restitution:0.3,
			friction:0.5,
            density:1.2
        }
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		this.image=loadImage("paper.png")
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		

			
			imageMode(RADIUS)
			
			fill("PINK")
			image(this.image,paperpos.x,paperpos.y,this.r, this.r);
			
			
	}

}