class Rope{
    constructor(body,anchor){
        var options = {
            bodyA: body,
            pointB:anchor,
            stiffness: 0.04,
            length: 20
        }
        this.bodyA = body;
        this.pointB = anchor
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    fly(){
      this.rope.bodyA = null;
    }

   attach(body){
        this.rope.bodyA = body;
    }


    display(){

        if(this.rope.bodyA){
            var pointA = this.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
}
}
}