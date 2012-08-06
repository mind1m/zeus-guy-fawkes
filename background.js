/**
 * Created with JetBrains WebStorm.
 * User: V
 * Date: 06.08.12
 * Time: 10:54
 * To change this template use File | Settings | File Templates.
 */
function BackGround() {
    var tiles = new Array();
    var sizeOfTile;
    var sizeOfMap;
    var numberOfTiles;

    this.getTiles = function() {
        return tiles;
    };
    this.getSizeOfTile = function() {
        return sizeOfTile;
    };
    this.getSizeOfMap = function() {
        return sizeOfMap;
    };
    this.getType = function() {
        return type;
    };
    this.getNumberOfTiles = function() {
        return numberOfTiles;
    };
    this.setTiles = function(newTiles) {
        tiles = newTiles;
    };
    this.setSizeOfTile = function(newSizeOfTile) {
        sizeOfTile = newSizeOfTile;
    };
    this.setSizeOfMap = function(newSizeOfMap) {
        sizeOfMap = newSizeOfMap;
    };
    this.setNumberOfTiles = function(newNumberOfTiles) {
        numberOfTiles = newNumberOfTiles;
    };

    this.constructor = function(newSizeOfMap, newSizeOfTile) {
        numberOfTiles = newSizeOfMap/newSizeOfTile;
        sizeOfMap = newSizeOfMap;
        sizeOfTile = newSizeOfTile;
        var k = 0;
        for (var i = 0; i < numberOfTiles; ++i) {
            for (var j = 0; j < numberOfTiles; ++j) {
                tiles[k] = {x: i, y: j};
                k++;
            }
        }
    };
}