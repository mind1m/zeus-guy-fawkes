/**
 * Created with JetBrains WebStorm.
 * User: user
 * Date: 08.08.12
 * Time: 15:25
 * To change this template use File | Settings | File Templates.
 */
/**
 * Created with JetBrains WebStorm.
 * User: Haret
 * Date: 06.08.12
 * Time: 14:28
 * To change this template use File | Settings | File Templates.
 */

function Bomb(x, y, id) {
    this.x = x;
    this.y = y;
    this.timer = 0;
    this.power = 0;
    this.id = id;
}

Bomb.prototype = {
    getX: function() {
        return this.x;
    },

    getY: function() {
        return this.y;
    },

    setX: function(value) {
        this.x = value;
    },

    setY: function(value) {
        this.y = value;
    },
    setXY: function(newX,newY){
        this.x = newX;
        this.y = newY;
    },
    getID: function() {
        return this.id;
    },

    setID: function(value) {
        this.id = value;
    }
};