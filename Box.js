class Box {
  constructor(x,y,width,height,colorR,colorG,colorB) {
    var options = {
        isStatic: false
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.colorR = colorR;
    this.colorG = colorG;
    this.colorB = colorB;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill(this.colorR,this.colorG,this.colorB);
    rect(pos.x, pos.y, this.width, this.height);
  }
};
