class ComputerArcher {

    constructor(x, y, width, height) {

      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      
      var options = {
        isStatic:true
      }
     
      this.body = Bodies.rectangle(x, y, width, height,options);
      
      this.image = loadImage("./assets/computerArcher.png");
      World.add(world, this.body);
      Matter.Body.setAngle(this.body,PI/2);
    }

    display() {

      var pos = this.body.position;
      var angle = this.body.angle;

      fill("#676e6a");
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0,0, this.width, this.height);
      pop();

    }

  }
  
