class rope{
    constructor(body1,body2,offsetX,offsetY){

        var options = {
        bodyA: body1,
        bodyB: body2,
        pointB:{x:this.offsetX, y:this.offsetY}
        }

        this.rope = Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        var pointA = this.rope.body1.position;
        var pointB = this.rope.body2.position;

        strokeWeight(3);

        var Anchor1X = pointA.x
		var Anchor1Y = pointA.y

		var Anchor2X =  pointB.x + this.offsetX
		var Anchor2Y = pointB.y + this.offsetY

        line(Anchor1X, Anchor1Y, Anchor2X, Anchor2Y);
    }
}