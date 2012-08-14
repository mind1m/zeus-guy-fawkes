/**
 * Created with JetBrains WebStorm.
 * User: V
 * Date: 08.08.12
 * Time: 14:33
 * To change this template use File | Settings | File Templates.
 */
function draw(player,bombs, fires) {
    //Player
    var playerDiv = document.getElementById("player");
    if (playerDiv) {
    playerDiv.style.left = player.getX()*sizeOfTile + "px";
    playerDiv.style.top = player.getY()*sizeOfTile + "px";
    }

    //Enemy
    var enemyDivs = document.getElementsByClassName("enemy");
    for (var i = 0; i<enemyDivs.length; i++) {
        var enemyDiv = enemyDivs[i];
        var enemy = undefined;
        for (var j = 0; j<enemies.length; j++) {
            if (enemies[j].id == enemyDiv.getAttribute('id')) {
                enemy = enemies[j];
                break;
            }
        }
        if (!enemy.dead) {
            enemyDiv.style.left = enemy.getX()*sizeOfTile + "px";
            enemyDiv.style.top = enemy.getY()*sizeOfTile + "px";
        }
    }

    //Bombs
    if (bombs.length != 0) {
        var bombDivs = document.getElementsByClassName("bomb");
        for (var i = 0; i < bombs.length; ++i) {
            for (var j = 0; j < bombDivs.length; ++j) {
                if (bombDivs[j].getAttribute("id") == bombs[i].getID()) {
                    if (bombDivs[j].style.visibility == "hidden") {
                        bombDivs[j].style.visibility = "visible";
                    }
                    bombDivs[j].style.top = bombs[i].getY()*sizeOfTile + "px";
                    bombDivs[j].style.left = bombs[i].getX()*sizeOfTile + "px";
                    bombDivs[j].style.backgroundRepeat = "no-repeat";
                    bombDivs[j].style.backgroundSize = "100% 100%";
                    break;
                }
            }
        }
    }

    //Fire
    if (fires.length != 0) {
        var fireDivs = document.getElementsByClassName("fire");
        for (var i = 0; i < fires.length; ++i) {
            for (var j = 0; j < fireDivs.length; ++j) {
                if (fireDivs[j].getAttribute("id") == fires[i].getID()) {
                    if (fireDivs[j].style.visibility == "hidden") {
                        fireDivs[j].style.visibility = "visible";
                    }
                    fireDivs[j].style.top = fires[i].getY()*sizeOfTile + "px";
                    fireDivs[j].style.left = fires[i].getX()*sizeOfTile + "px";
                    break;
                }
            }
        }
    }
    checkCollisions(player.getX(), player.getY(), undefined, true)
}

function resize(){
    var element;
    body_height =  window.innerHeight;
    body_width = window.innerWidth;

    max_size = Math.min(body_height,body_width)

    summary_div_heigth = max_size ;
    div_height = summary_div_heigth/numberOfTiles;

    sizeOfTile = Math.round(div_height);
    //alert(sizeOfTile);
    sizeOfMap = Math.round(summary_div_heigth);

    var fieldDiv = document.getElementById("field");
    var controls = document.getElementById("controls");
    var bombControlDiv = document.getElementById("bombControl");
    var controls_container = document.getElementById("controls_container");
    var fieldX = 0;
    var sizeOfControls = 0;
    var controlsX = 0;
    var sizeOfBombControl = 0;
    var bombControlX = 0;

    if (body_width > body_height && sizeOfMap + controls.offsetWidth + bombControlDiv.offsetWidth > body_width) {
        sizeOfMap = Math.round(sizeOfMap * 0.8);
        sizeOfTile = Math.round(sizeOfTile * 0.8);
    } else if (body_width < body_height && sizeOfMap + controls.offsetHeight > body_height) {
        sizeOfMap = Math.round(sizeOfMap * 0.7);
        sizeOfTile = Math.round(sizeOfTile * 0.7);
    }

    if (body_width > body_height) {
        var rightTopX;
        var rightBottomX;
        controls_container.style.top = "0px";
        controls_container.style.left = "0px";

        controls_container.style.width = Number(Math.round(body_width/2 - sizeOfMap/2))+ "px";


        controls.style.width = Number(Math.round(body_width/3 - sizeOfMap/3))+ "px";
        controls.style.height = controls.style.width;
        //controls.style.width = "200px";
        //console.log(controls.style.height);
        fieldX = body_width/2 - sizeOfMap/2;
        sizeOfControls = controls.offsetWidth;
        controlsX = fieldX/2 - sizeOfControls/2;
        sizeOfBombControl = bombControlDiv.offsetWidth;
        bombControlX = body_width/2 + sizeOfMap/2 + fieldX/2 - sizeOfBombControl/2;
        fieldDiv.style.left = fieldX + "px";
        controls.style.left = controlsX + "px";
        controls.style.top = (body_height/2 - controls.offsetHeight/2) + "px";
        bombControlDiv.style.left = bombControlX + "px";
        bombControlDiv.style.top = (body_height/2 - bombControlDiv.offsetHeight/2) + "px";

    } else {
        fieldX = body_width/2 - sizeOfMap/2;
        fieldDiv.style.left = fieldX + "px";

        //var controlsHeight = body_height-sizeOfMap;
        controls.style.width = (body_height-sizeOfMap)*0.9 + "px";
        controls.style.height = controls.style.width;

        fieldDiv.style.top = "0px";
        controls.style.top = sizeOfMap + "px";
        controls.style.left = "0px";
        bombControlDiv.style.top = sizeOfMap + "px";
        //bombControlDiv.style.left = (sizeOfMap - bombControlDiv.offsetWidth) + "px";
        bombControlDiv.style.left = body_width - bombControlDiv.offsetWidth + "px";
    }

    //Background
    var backgroundDiv = document.getElementById("background");
    backgroundDiv.innerHTML = "";
    //document.getElementById("field").appendChild(backgroundDiv);
    for (var i = 0; i < background.length; ++i) {
        element = document.createElement('div');
        element.setAttribute('class', 'partOfBackground');
        element.setAttribute('id', i.toString());
        element.style.position = "absolute";
        element.style.left = background[i].getX()*sizeOfTile+ "px";
        element.style.top = background[i].getY()*sizeOfTile + "px";
        element.style.width = sizeOfTile + "px";
        element.style.height = sizeOfTile + "px";
        element.style.backgroundImage = backgroundImage;
        element.style.backgroundRepeat = "no-repeat";
        element.style.backgroundSize = "100% 100%";
        backgroundDiv.appendChild(element);
    }

    //Blocks
    var blocksDiv = document.getElementById("blocks");
    blocksDiv.innerHTML = "";
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
        element.style.backgroundRepeat = "no-repeat";
        element.style.backgroundSize = "100% 100%";
        blocksDiv.appendChild(element);
    }

    //Boxes
    var boxDiv = document.getElementById("boxes");
    boxDiv.innerHTML = "";
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
        element.style.backgroundRepeat = "no-repeat";
        element.style.backgroundSize = "100% 100%";
        boxDiv.appendChild(element);
    }
    //Player
    var playerDiv = document.getElementById("player");
    playerDiv.style.width = sizeOfTile + "px";
    playerDiv.style.height = sizeOfTile + "px";
    playerDiv.style.backgroundRepeat = "no-repeat";
    playerDiv.style.backgroundSize = "100% 100%";

    //Enemy
    var enemyDivs = document.getElementsByClassName("enemy");
    for (var i = 0; i<enemyDivs.length; i++) {
        var enemyDiv = enemyDivs[i];
        enemyDiv.style.width = sizeOfTile + "px";
        enemyDiv.style.height = sizeOfTile + "px";
        enemyDiv.style.backgroundRepeat = "no-repeat";
        enemyDiv.style.backgroundSize = "100% 100%";
    }

    //alert(div_height);
    //$('div.partOfBackground').css('height', div_height);
    //$('div.partOfBackground').css('width', div_height);

    //Creating an objects
    //createObjects(backGround, blocks, player, boxes);

    //Main loop


}