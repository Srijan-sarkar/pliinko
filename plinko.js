class Plinko{
    constructor(x,y,radius){

        var options = {

            isStatic  : true,
            

        }
        this.body = Bodies.circle(x,y,radius,options);
        this.width = radius*2;
        this.height = radius*2;
       

        World.add(world,this.body);
        
    }

    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle)
        rectMode(CENTER);
        fill("white");
        ellipse(0,0, this.width, this.height);
        pop();
        
       
    }
}