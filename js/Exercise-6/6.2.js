//if statement in collides nog aanpassen
class rectangle{
    constructor(topLeftXPos, topLeftYPos, width, lenght){
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.lenght = lenght;
    }
    collides(otherRectangle) {
        if (this.topLeftXPos <= otherRectangle.topLeftXPos + otherRectangle.width &&
            this.topLeftXPos + this.width >= otherRectangle.topLeftXPos &&
            this.topLeftYPos <= otherRectangle.topLeftYPos + otherRectangle.height &&
            this.topLeftYPos + this.height >= otherRectangle.topLeftYPos)
            {
                return true;
            }
        return false;
        /* return !((this.topLeftYPos + this.height) < (otherRectangle.topLeftXPos)) ||
        (this.topLeftYPos > (otherRectangle.topLeftXPos + otherRectangle.height)) ||
        ((this.topLeftXPos + this.width) < otherRectangle.topLeftXPos) ||
        (this.topLeftXPos > (otherRectangle.topLeftXPos + otherRectangle.width)); */
    }
}


let rect1 = new rectangle (0,0,20,20);
let rect2 = new rectangle (0,0,20,20);

console.log(rect1.collides(rect2));

/* Create a class name Rectangle with attributes topLeftXPos, topLeftYPos, width and lenght. 
Add a method named collides(otherRectangle) that returns true only if the current rectangle collides with otherRectangle.

Test the collides(otherRectangle) method by using multiple test cases. */