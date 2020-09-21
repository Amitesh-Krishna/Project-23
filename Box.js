class Box{

	constructor(x,y,width,height,tworld){

		this.width = width;
		this.height =  height;

		this.body = Bodies.rectangle(x,y,width,height,{isStatic:true});
		fill(color(255,0,0));

		this.pos = this.body.position;

		World.add(tworld,this.body);
	}

	display(){

		rectMode(CENTER);

		rect(this.pos.x,this.pos.y,this.width,this.height);
	
	}
}