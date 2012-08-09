/**
 * Created with JetBrains WebStorm.
 * User: V
 * Date: 06.08.12
 * Time: 12:31
 * To change this template use File | Settings | File Templates.
 */
function Block(x, y) {
    this.x = x;
    this.y = y;
}

Block.prototype = {
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
    }
};

/**
 * Created with JetBrains WebStorm.
 * User: V
 * Date: 06.08.12
 * Time: 10:54
 * To change this template use File | Settings | File Templates.
 */
function BackgroundTile(x, y) {
    this.x = x;
    this.y = y;
}

BackgroundTile.prototype = {
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
    }
};


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

function Box(x, y) {
    this.x = x;
    this.y = y;
}
Box.prototype = {
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
    }
};

function Fire(x, y, id) {
    this.x = x;
    this.y = y;
    this.timer = 0;
    this.power = 0;
    this.id = id;
}

Fire.prototype = {
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
