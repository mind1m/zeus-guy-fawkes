/**
 * Created with JetBrains WebStorm.
 * User: Haret
 * Date: 06.08.12
 * Time: 13:40
 * To change this template use File | Settings | File Templates.
 */
function Map(){
    var tileSize;
    var mapSize;
    var tiles = new Array();
    var numTiles;



    this.getTileSize = function(){
        return tileSize;
    };
        this.getTiles = function(){
          return tiles;
        };
        this.getMapSize = function(){
            return mapSize;
        };
        this.getNumTiles = function(){
            return getNumTiles;
        };



        this.setTileSize(newTileSize){
         tileSize=newTileSize;
    };
    this.setmapSize(newMapSize){
        mapSize=newMapSize;
    };

    this.setnumTiles(newnumTiles){
        numTiles=newnumTiles;
    };

    this.build = function(newMapSize,newTileSize){
        for(i=0;i<newMapSize/newTileSize;i++)
        {        for(j=0;j<newMapSize/newTileSize;j++)

tiles[i][j]=1;
            }    }
};







