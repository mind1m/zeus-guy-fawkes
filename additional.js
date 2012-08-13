/**
 * Created with JetBrains WebStorm.
 * User: V
 * Date: 06.08.12
 * Time: 15:13
 * To change this template use File | Settings | File Templates.
 */

function removeElement(elementId)
{
    element = document.getElementById(elementId);
    if (element) {
        element.parentNode.removeChild(element);
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function clearDOM() {
    var field = document.getElementById("field");
    while (field.childNodes.length >= 3) {
        field.removeChild(field.firstChild);
    }
}
function checkCollisions(newX, newY, fire, player, isenemy) {
    //Screen limit
    if (newX * sizeOfTile >= sizeOfMap || newX * sizeOfTile < 0 || newY * sizeOfTile >= sizeOfMap || newY * sizeOfTile < 0)
        return false;

    //Enemy
    if (!enemy.dead) {
        if (enemy.getX() == newX && enemy.getY() == newY) {
            if (typeof fire === "undefined") {
                return false;
            } else {
                var enemy_div = document.getElementById("enemy");
                enemy_div.style.display = "None";
                enemy.dead = true;
                return true;
            }
        }
    }

    //Blocks
    for (var i = 0; i < blocks.length; ++i) {
        if (blocks[i].getX() == newX && blocks[i].getY() == newY) {
            return false;
        }
    }
    //Boxes
    for (var i = 0; i < boxes.length; ++i) {
        if (boxes[i].getX() == newX && boxes[i].getY() == newY) {
            if (typeof fire === "undefined") {
                return false;
            } else {
                var box_div = document.getElementById("box_" + boxes[i].id.toString());
                box_div.parentNode.removeChild(box_div);
                boxes.splice(i, 1);
                i = i - 1;
                return true;
            }

        }
    }
    //Bombs
    for (var i = 0; i < bombs.length; ++i) {
        if (bombs[i].getX() == newX && bombs[i].getY() == newY) {
            return false;
        }
    }

    if (typeof player === "undefined") {
        return true;
    } else {
        for (var i = 0; i < fires.length; ++i) {
            if (fires[i].getX() == newX && fires[i].getY() == newY) {
                setTimeout(function() { $('#over').show();
                                        $('#field').hide();
                                        $('#manag').hide();}  ,600)
                return false;
            }
        }

    }


    if (typeof enemy === "undefined") {
        return true;
    } else {
        for (var i = 0; i < fires.length; ++i) {
            if (fires[i].getX() == newX && fires[i].getY() == newY) {
                var enemy_div = document.getElementById("enemy");
                enemy_div.style.display = "None";
                enemy.dead = true;
                return false;
            }
        }

    }

    return true;
}

function clearObject () {
    var i, j;
    var id;

    var element;
    //Player
    player.setX(0);
    player.setY(0);

    //Background
    backGround.splice(0, background.length);
    for (i = 0; i < numberOfTiles; ++i) {
        for (j = 0; j < numberOfTiles; ++j) {
            backGround.push(new BackgroundTile(i,j));
        }
    }
    //Block of the field
    blocks.splice(0, blocks.length);
    for (var p = 0; p<5; p++) {
        for (k = 0; k < 5; ++k) {
            blocks.push(new Block(p*2+1, k*2+1));
        }
    }
    //Box
    boxes.splice(0, boxes.length);
    for (k = 0; k < 25; ++k) {
        i = getRandomInt(0, (sizeOfMap - sizeOfTile)/sizeOfTile);
        j = getRandomInt(0, (sizeOfMap - sizeOfTile)/sizeOfTile);
        if (checkCollisions(i,j) && (i != player.x+1) && (j != player.y+1)) {
            boxes.push(new Box(i, j));
        }
    }
    //Player
    player.setX(0);
    player.setY(0);
    //Bombs
    bombs.splice(0, bombs.length);
    //Fires
    fires.splice(0, bombs.length);

    //Blocks
    var blocksDiv = document.getElementById('blocks');
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
        //element.style.zIndex = blocksIndex;
        blocksDiv.appendChild(element);
    }

    //Boxes
    var boxDiv = document.getElementById('boxes');
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
        boxDiv.appendChild(element);
    }
}

function getArrayOfMap() {
    //Field
    var dots = new Array();
    //Background
    for (var i = 0; i < numberOfTiles; ++i) {
        dots[i] = new Array();
        for (var j = 0; j < numberOfTiles; ++j) {
            dots[i][j] = 0;
        }
    }
    //Blocks
    for (var i = 0; i < blocks.length; ++i) {
        dots[blocks[i].getY()][blocks[i].getX()] = -1;
    }
    //Boxes
    for (var i = 0; i < boxes.length; ++i) {
        dots[boxes[i].getY()][boxes[i].getX()] = -1;
    }
    return dots;
}

function pathFind(startx, starty, finishx, finishy) {
    //i revert start and finish
    var map = getArrayOfMap();

    var queuex = new Array()
    var queuey = new Array()

    var new_queuex = new Array()
    var new_queuey = new Array()

    queuex.push(finishx);
    queuey.push(finishy);

    var map_size = sizeOfMap/sizeOfTile;
    map_size--;

    var count = 1;
    var steps = 0;
    if ((finishx == startx) && (finishy == starty)) {
        var res = new Array();
        res.push(startx)
        res.push(starty)
        res.push(true)
        return res
    }
    while (count < 12) {
        for (var i = 0; i < queuex.length; i++) {
            var x = queuex[i];
            var y = queuey[i];
            if (((x + 1 == startx) && (y == starty)) ||
                ((x - 1 == startx) && (y == starty)) ||
                ((x == startx) && (y + 1 == starty)) ||
                ((x == startx) && (y - 1 == starty))) {
                var res = new Array();
                res.push(x);
                res.push(y);
                res.push(false);
                return res
            }
            if ((x+1<=map_size) && (map[y][x+1] == 0)) {
                map[y][x+1] = count;
                new_queuex.push(x+1);
                new_queuey.push(y);
            }
            if ((x-1>=0) && (map[x - 1][y] == 0)) {
                map[y][x - 1] = count;
                new_queuex.push(x-1);
                new_queuey.push(y);
            }
            if ((y+1<=map_size) && (map[y+1][x] == 0)) {
                map[y+1][x] = count;
                new_queuex.push(x);
                new_queuey.push(y+1);
            }
            if ((y-1>=0) && (map[y-1][x] == 0)) {
                map[y-1][x] = count;
                new_queuex.push(x);
                new_queuey.push(y-1);
            }
            steps++;
        }
        queuex = new_queuex;
        queuey = new_queuey;
        new_queuex = [];
        new_queuey = [];
        count++;
    }
    var res = new Array();
    res.push(startx)
    res.push(starty)
    res.push(false)
    return res
}