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
const backGroundImage = "url(images/background.gif)";

function createObjects(backGround, blocks) {
    var element;
    //Background
    var backGroundDiv = document.createElement('div');
    backGroundDiv.setAttribute('id', 'background');
    backGroundDiv.style.position = "absolute";
    backGroundDiv.style.left = "0px";
    backGroundDiv.style.top = "0px";
    document.getElementById("field").appendChild(backGroundDiv);
    for (var i = 0; i < backGround.length; ++i) {
        element = document.createElement('div');
        element.setAttribute('id', 'partOfBackground');
        element.style.position = "absolute";
        element.style.left = sizeOfTile * backGround[i].getX()+ "px";
        element.style.top = sizeOfTile * backGround[i].getY() + "px";
        element.style.width = sizeOfTile + "px";
        element.style.height = sizeOfTile + "px";
        element.style.backgroundImage = backGroundImage;
        backGroundDiv.appendChild(element);
    }
    //Blocks
    var blocksDiv = document.createElement('div');
    blocksDiv.setAttribute('id', 'blocks');
    blocksDiv.style.position = "absolute";
    blocksDiv.style.left = "0px";
    blocksDiv.style.top = "0px";
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
        blocksDiv.appendChild(element);
    }
}