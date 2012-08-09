/**
 * Created with JetBrains WebStorm.
 * User: user
 * Date: 06.08.12
 * Time: 14:09
 * To change this template use File | Settings | File Templates.
 */

function Player(x, y) {
    this.x = x;
    this.y = y;
}

Player.prototype = {
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

    goLeft: function() {
        if (checkCollisions(this.x-sizeOfTile, this.y))
        //if(this.x-sizeOfTile >= 0)
            this.x=this.x-sizeOfTile;
    },
    goUp: function() {
        if (checkCollisions(this.x, this.y-sizeOfTile))
        //if(this.y-sizeOfTile >= 0)
            this.y=this.y-sizeOfTile;
    },
    goRight: function() {
        if (checkCollisions(this.x+sizeOfTile, this.y))
        //if(this.x+sizeOfTile < sizeOfMap)
            this.x=this.x+sizeOfTile;
    },
    goDown: function() {
        if (checkCollisions(this.x, this.y+sizeOfTile))
        //if(this.y+sizeOfTile < sizeOfMap)
            this.y=this.y+sizeOfTile;
    }
};