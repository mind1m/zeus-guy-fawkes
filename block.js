/**
 * Created with JetBrains WebStorm.
 * User: V
 * Date: 06.08.12
 * Time: 12:31
 * To change this template use File | Settings | File Templates.
 */
function Block() {
    var x;
    var y;


    this.getX = function() {
        return x;
    };
    this.getY = function() {
        return y;
    };
    this.setX = function(newX) {
        x = newX;
    };
    this.setY = function(newY) {
        y = newY;
    };

    this.constructor = function(newX, newY) {
        x = newX;
        y = newY;
    };

}