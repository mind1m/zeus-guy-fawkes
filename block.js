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
    var sizeOfTile;
    var ImagePath = "url(images/background.gif)";

    this.getTiles = function() {
        return tiles;
    };
    this.getX = function() {
        return x;
    };
    this.getY = function() {
        return y;
    };
    this.getTiles = function() {
        return tiles;
    };
    this.getSizeOfTile = function() {
        return sizeOfTile;
    };
    this.setTiles = function(newTiles) {
        tiles = newTiles;
    };
    this.setX = function(newX) {
        x = newX;
    };
    this.setY = function(newY) {
        y = newY;
    };
    this.setSizeOfTile = function(newSizeOfTile) {
        sizeOfTile = newSizeOfTile;
    };

    this.constructor = function(newX, newY, newSizeOfTile) {
        x = newX;
        y = newY;
        sizeOfTile = newSizeOfTile;
    };
}