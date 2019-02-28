class circle{
    constructor(xPos, yPos, radius){
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }
    move(xOffset,yOffset){
        this.xPos = xOffset;
        this.yPos = yOffset;
    }
    get surface (){
        return Math.PI * Math.pow(this.radius, 2);
    }
    set surface(varRadius){
        this.radius = varRadius;
    }
    
}

let circle1 = new circle (20, 50, 10);


console.log(circle1.surface);
/* circle1.move(10,15);
console.log(circle1); */
circle1.surface = 5;
console.log(circle1.surface);
circle1.move(30,50);
console.log(circle1);

/* Create a class named Circle with attributes xPos, yPos and radius. Add a method named move(xOffset, yOffset) that 
will adjust the position of the circle. Add a getter accessor named surface that will return the surface of the circle.

Test its method and accessors by modifying the values and checking if everything is consistent. */