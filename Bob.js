class Bob{
    constructor(x, y, r ) {
        var options = {
            restitution:1,
            'density':1.0
        }
        this.body = Bodies.polygon(x, y, r, r, options);
        this.r=r
        this.x=x
        this.y=y
        World.add(world, this.body);
      }
      display(){
        
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(RADIUS);
        stroke("grey")
        strokeWeight(3);
        fill("violet")
        ellipse(0, 0, this.r, this.r);
        pop();
      }
  }