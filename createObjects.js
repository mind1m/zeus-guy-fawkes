/**
 * Created with JetBrains WebStorm.
 * User: V
 * Date: 06.08.12
 * Time: 11:18
 * To change this template use File | Settings | File Templates.
 */
sizeOfMap = 352;
sizeOfTile = 32;
const numberOfTiles = sizeOfMap/sizeOfTile;
const blockImage = "url(images/wall.png)";
const backgroundImage = "url(images/back2.png)";
const playerImage = "url(images/player2.png)";
const bombImage = "url(images/bomb.png)";
const boxImage = "url(images/box2.png)";
const enemyImage = "url(images/guard.png)";
const fireImage = "url(images/fire.png)";

const backgroundIndex = 1;
const blocksIndex = 2;
const boxIndex = 2;
const playerIndex = 2;
const enemyIndex = 2;
const bombIndex = 3;

function createObjects(backGround, blocks, player, boxes) {
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
        element.setAttribute('class', 'partOfBackground');
        element.setAttribute('id', i.toString());
        element.style.position = "absolute";
        element.style.left = backGround[i].getX()*sizeOfTile+ "px";
        element.style.top = backGround[i].getY()*sizeOfTile + "px";
        element.style.width = sizeOfTile + "px";
        element.style.height = sizeOfTile + "px";
        element.style.backgroundImage = backgroundImage;
        backgroundDiv.appendChild(element);
    }
    //Blocks
    var blocksDiv = document.createElement('div');
    blocksDiv.setAttribute('id', 'blocks');
    blocksDiv.style.position = "absolute";
    blocksDiv.style.left = "px";
    blocksDiv.style.top = "0px";
    blocksDiv.style.zIndex = blocksIndex;
    document.getElementById("field").appendChild(blocksDiv);
    for (var i = 0; i < blocks.length; ++i) {
        element = document.createElement('div');
        element.setAttribute('class', 'block');
        element.setAttribute('id', i.toString());
        element.style.position = "absolute";
        element.style.left = blocks[i].getX()*sizeOfTile+ "px";
        element.style.top = blocks[i].getY()*sizeOfTile + "px";
        element.style.width = sizeOfTile + "px";
        element.style.height = sizeOfTile + "px";
        element.style.backgroundImage = blockImage;


        blocksDiv.appendChild(element);
    }
    //Player
    var playerDiv = document.createElement('div');
    playerDiv.setAttribute('id', 'player');
    playerDiv.style.position = "absolute";
    playerDiv.style.left = player.getX()*sizeOfTile+ "px";
    playerDiv.style.top = player.getY()*sizeOfTile+ "px";
    playerDiv.style.width = sizeOfTile + "px";
    playerDiv.style.height = sizeOfTile + "px";
    playerDiv.style.zIndex = playerIndex;
    playerDiv.style.backgroundImage = playerImage;
    playerDiv.style.backgroundRepeat = "no-repeat";
    playerDiv.style.backgroundSize = "100% 100%";
    document.getElementById("field").appendChild(playerDiv);

    //Boxes
    var boxDiv = document.createElement('div');
    boxDiv.setAttribute('id', 'boxes');
    boxDiv.style.position = "absolute";
    boxDiv.style.left = "px";
    boxDiv.style.top = "0px";
    boxDiv.style.zIndex = boxIndex;
    document.getElementById("field").appendChild(boxDiv);
    for (var i = 0; i < boxes.length; ++i) {
        id = getRandomInt(1,1000);
        boxes[i].id = id;
        element = document.createElement('div');
        element.setAttribute('class', 'box');
        element.setAttribute('id', "box_"+id.toString());
        element.style.position = "absolute";
        element.style.left = boxes[i].getX()*sizeOfTile+ "px";
        element.style.top = boxes[i].getY()*sizeOfTile + "px";
        element.style.width = sizeOfTile + "px";
        element.style.height = sizeOfTile + "px";
        element.style.backgroundImage = boxImage;
        element.style.zIndex = boxIndex;
        boxDiv.appendChild(element);
    }
    //Enemy
    var enemyDiv = document.createElement('div');
    enemyDiv.setAttribute('id', 'enemy');
    enemyDiv.style.position = "absolute";
    enemyDiv.style.left = enemy.getX() * sizeOfTile+ "px";
    enemyDiv.style.top = enemy.getY() * sizeOfTile+ "px";
    enemyDiv.style.width = sizeOfTile + "px";
    enemyDiv.style.height = sizeOfTile + "px";
    enemyDiv.style.zIndex = enemyIndex;
    enemyDiv.style.backgroundImage = enemyImage;
    document.getElementById("field").appendChild(enemyDiv);
}