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
}