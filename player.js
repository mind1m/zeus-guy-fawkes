/**
 * Created with JetBrains WebStorm.
 * User: user
 * Date: 06.08.12
 * Time: 14:09
 * To change this template use File | Settings | File Templates.
 */
function Player() {
    var x;
    var y;

    this.getX = function() {
        return x;
    };
    this.getY = function() {
        return y;
    };
    this.setX = function(newX) {
        this.x = newX;
    };
    this.setY = function(newY) {
        this.y = newY;
    };

    this.constructor = function(newX, newY) {
        this.x = newX;
        this.y = newY;
    };

    this.goLeft = function() {
        this.x=this.x-1;
    };
    this.goUp = function() {
        this.y=this.y+1;
    };
    this.goRight = function() {
        this.x=this.x+1;
    };
    this.goDown = function() {
        this.y=this.y-1;
    };
}
/**
 * Created with JetBrains WebStorm.
 * User: user
 * Date: 08.08.12
 * Time: 10:00
 * To change this template use File | Settings | File Templates.
 */
