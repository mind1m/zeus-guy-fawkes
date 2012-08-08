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
const playerImage = "url(images/player.gif)";
const bombImage = "url(images/bomb.png)";
const backgroundIndex = 1;
const blocksIndex = 2;
const playerIndex = 2;
const bombIndex = 3;

function createObjects(backGround, blocks, player, bomb) {
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
        backgroundDiv.appendChild(element);
    }
    //Blocks
    var blocksDiv = document.createElement('div');
    blocksDiv.setAttribute('id', 'blocks');
    blocksDiv.style.position = "absolute";
    blocksDiv.style.left = "0px";
    blocksDiv.style.top = "0px";
    blocksDiv.style.zIndex = blocksIndex;
    //debugger;
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
    //Player
    var playerDiv = document.createElement('div');
    playerDiv.setAttribute('id', 'player');
    playerDiv.style.position = "absolute";
    playerDiv.style.left = sizeOfTile * player.getX()+ "px";
    playerDiv.style.top = sizeOfTile * player.getY()+ "px";
    playerDiv.style.width = sizeOfTile + "px";
    playerDiv.style.height = sizeOfTile + "px";
    playerDiv.style.zIndex = playerIndex;
    playerDiv.style.backgroundImage = playerImage;
    document.getElementById("field").appendChild(playerDiv);

    //Bomb
    var bombDiv = document.createElement('div');
    bombDiv.setAttribute('id', 'bomb');
    bombDiv.style.position = "absolute";
    bombDiv.style.left = sizeOfTile * bomb.getX()+ "px";
    bombDiv.style.top = sizeOfTile * bomb.getY()+ "px";
    bombDiv.style.width = sizeOfTile + "px";
    bombDiv.style.height = sizeOfTile + "px";
    bombDiv.style.zIndex = bombIndex;
    bombDiv.style.backgroundImage = bombImage;
    document.getElementById("field").appendChild(bombDiv);
}