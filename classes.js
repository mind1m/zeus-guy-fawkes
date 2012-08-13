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
        if (checkCollisions(this.x-1, this.y, undefined, this))
        //if(this.x-sizeOfTile >= 0)
            this.x=this.x-1;
    },
    goUp: function() {
        if (checkCollisions(this.x, this.y-1, undefined, this))
        //if(this.y-sizeOfTile >= 0)
            this.y=this.y-1;
    },
    goRight: function() {
        if (checkCollisions(this.x+1, this.y, undefined, this))
        //if(this.x+sizeOfTile < sizeOfMap)
            this.x=this.x+1;
    },
    goDown: function() {
        if (checkCollisions(this.x, this.y+1, undefined, this))
        //if(this.y+sizeOfTile < sizeOfMap)
            this.y=this.y+1;
    }
};

function Box(x, y) {
    this.x = x;
    this.y = y;
    this.id = 0;
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

function Enemy(x, y) {
    this.x = x;
    this.y = y;
    this.lastX = 0;
    this.lastY = 0;
}

Enemy.prototype = {
    getX: function() {
        return this.x;
    },

    getY: function() {
        return this.y;
    },

    getLastX: function() {
        return this.lastY;
    },

    getLastY: function() {
        return this.lastY;
    },

    setX: function(value) {
        this.x = value;
    },

    setY: function(value) {
        this.y = value;
    },

    setLastX: function(value) {
        this.lastX = value;
    },

    setLastY: function(value) {
        this.lastY = value;
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

