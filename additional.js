/**
 * Created with JetBrains WebStorm.
 * User: V
 * Date: 06.08.12
 * Time: 15:13
 * To change this template use File | Settings | File Templates.
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function clearDOM() {
    var field = document.getElementById("field");
    while (field.childNodes.length >= 3) {
        field.removeChild(field.firstChild);
    }
}
function checkCollisions(newX, newY, fire, player) {
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
                alert("Boooooooooom!");
                return false;
            }
        }

    }


    return true;
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
    while (count < 12) {
        for (var i = 0; i < queuex.length; i++) {
            var x = queuex[i];
            var y = queuey[i];
            if (((x + 1 == startx) && (y == starty)) ||
                ((x - 1 == startx) && (y == starty)) ||
                ((x == startx) && (y + 1 == starty)) ||
                ((x == startx) && (y - 1 == starty))) {
                var res = new Array();
                res.push(x)
                res.push(y)
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
}