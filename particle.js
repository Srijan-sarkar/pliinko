class Particle{
    constructor(x,y,radius){

        var options = {

            isStatic  : false,
            restitution : 0.3,
            friction : 0.5,
            density :1.2

        }
        this.body = Bodies.circle(x,y,radius,options);
        this.width = radius*2;
        this.height = radius*2;
        this.color = color(random(0,255),random(0,255),random(0,255));

        World.add(world,this.body);
    }

    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle)
        rectMode(CENTER);
        fill(this.color);
        ellipse(0,0, this.width, this.height);
        pop();
        
 
        
    }
}