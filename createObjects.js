/**
 * Created with JetBrains WebStorm.
 * User: V
 * Date: 06.08.12
 * Time: 11:18
 * To change this template use File | Settings | File Templates.
 */
const sizeOfMap = 256;
const sizeOfTile = 32;
const numberOfTiles = sizeOfMap/sizeOfTile;
const blockImage = "url(images/block.gif)";
const backgroundImage = "url(images/background.gif)";
const backgroundIndex = 1;
const blocksIndex = 2;

function createObjects(backGround, blocks) {
    var element;
    //Background
    var backgroundDiv = document.createElement('div');
    backgroundDiv.setAttribute('id', 'background');
    backgroundDiv.style.position = "absolute";
    backgroundDiv.style.left = "0px";
    backgroundDiv.style.top = "0px";
    backgroundDiv.style.zIndex = backgroundIndex;
    document.getElementById("field").appendChild(backgroundDiv);
    for (var i = 0; i < backGround.length; ++i) {
        element = document.createElement('div');
        element.setAttribute('id', 'partOfBackground');
        element.style.position = "absolute";
        element.style.left = sizeOfTile * backGround[i].getX()+ "px";
        element.style.top = sizeOfTile * backGround[i].getY() + "px";
        element.style.width = sizeOfTile + "px";
        element.style.height = sizeOfTile + "px";
        element.style.backgroundImage = backgroundImage;
        //element.style.zIndex = backgroundIndex;
        backgroundDiv.appendChild(element);
    }
    //Blocks
    var blocksDiv = document.createElement('div');
    blocksDiv.setAttribute('id', 'blocks');
    blocksDiv.style.position = "absolute";
    blocksDiv.style.left = "0px";
    blocksDiv.style.top = "0px";
    blocksDiv.style.zIndex = blocksIndex;
    document.getElementById("field").appendChild(blocksDiv);
    for (var i = 0; i < blocks.length; ++i) {
        element = document.createElement('div');
        element.setAttribute('id', 'Block');
        element.style.position = "absolute";
        element.style.left = sizeOfTile * blocks[i].getX()+ "px";
        element.style.top = sizeOfTile * blocks[i].getY() + "px";
        element.style.width = sizeOfTile + "px";
        element.style.height = sizeOfTile + "px";
        element.style.backgroundImage = blockImage;
        //element.style.zIndex = blocksIndex;
        blocksDiv.appendChild(element);
    }
}