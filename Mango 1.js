class Mango1{
    constructor(x, y, width, height, angle) {
        var options = {
          isStatic:false,
          restitution:0.39,
          friction:9,
          density:9
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
       this.width = 90;
        this.height = 90;
        this.image = loadImage("Plucking mangoes/mango.png");
        World.add(world,this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}
  