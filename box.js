/**
 * Created with JetBrains WebStorm.
 * User: user
 * Date: 08.08.12
 * Time: 16:32
 * To change this template use File | Settings | File Templates.
 */
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
