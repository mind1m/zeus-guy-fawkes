/**
 * Created with JetBrains WebStorm.
 * User: user
 * Date: 06.08.12
 * Time: 14:09
 * To change this template use File | Settings | File Templates.
 */
function Player(newX, newY) {
    var x;
    var y;


    this.x = newX;
    this.y = newY;

    this.getX = function() {
        return this.x;
    };
    this.getY = function() {
        return this.y;
    };
    this.setX = function(newX) {
        this.x = newX;
    };
    this.setY = function(newY) {
        this.y = newY;
    };

    this.goLeft = function() {
        if(this.x-sizeOfTile >= 0)
         this.x=this.x-sizeOfTile;
    };
    this.goUp = function() {
        if(this.y-sizeOfTile >= 0)
        this.y=this.y-sizeOfTile;
    };
    this.goRight = function() {
        if(this.x+sizeOfTile < sizeOfMap)
          this.x=this.x+sizeOfTile;
    };
    this.goDown = function() {
        if(this.y+sizeOfTile < sizeOfMap)
         this.y=this.y+sizeOfTile;
    };
}