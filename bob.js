class Bob{
    constructor(x,y,r){
    var options={
    isStatic:false,
    restitution:1,
    friction:0,
    density:1.2
    }
    this.body=Bodies.circle(x,y,r/2,options);
    this.r=r/2;
    World.add(world,this.body)
    
    }
    display(){
    var pos=this.body.position;
    push();
    translate(pos.x,pos.y);
    fill ("pink");
    ellipseMode(RADIUS);
    ellipse(0,0,this.r,this.r);
    pop();
    
    
    
    }
    
    
    }