/**
 * Created with JetBrains WebStorm.
 * User: V
 * Date: 08.08.12
 * Time: 11:54
 * To change this template use File | Settings | File Templates.
 */
function Fire(x, y) {
    this.x = x;
    this.y = y;
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
    }
};