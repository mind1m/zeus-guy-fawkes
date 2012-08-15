/**
 * Created with JetBrains WebStorm.
 * User: V
 * Date: 06.08.12
 * Time: 15:13
 * To change this template use File | Settings | File Templates.
 */

function removeElement(elementId) {
    element = document.getElementById(elementId);
    if (element) {
        element.parentNode.removeChild(element);
    }
}

function dist(ax, ay, bx, by) {
    return Math.sqrt(Math.pow(ax - bx, 2) + Math.pow(ay - by, 2))

}

function generateBox() {
    i = getRandomInt(0, (sizeOfMap - sizeOfTile) / sizeOfTile);
    j = getRandomInt(0, (sizeOfMap - sizeOfTile) / sizeOfTile);
    while (!checkCollisions(i, j) || (dist(i, j, player.x, player.y) <= 2)) {

        i = getRandomInt(0, (sizeOfMap - sizeOfTile) / sizeOfTile);
        j = getRandomInt(0, (sizeOfMap - sizeOfTile) / sizeOfTile);
    }
    var newbox = new Box(i, j);
    boxes.push(newbox);
    var boxDiv = document.getElementById("boxes");

    id = getRandomInt(1, 1000);
    newbox.id = id;
    element = document.createElement('div');
    element.setAttribute('class', 'box');
    element.setAttribute('id', "box_" + id.toString());
    element.style.position = "absolute";
    element.style.left = newbox.getX() * sizeOfTile + "px";
    element.style.top = newbox.getY() * sizeOfTile + "px";
    element.style.width = sizeOfTile + "px";
    element.style.height = sizeOfTile + "px";
    element.style.backgroundImage = boxImage;
    element.style.zIndex = boxIndex;
    element.style.backgroundRepeat = "no-repeat";
    element.style.backgroundSize = "100% 100%";
    boxDiv.appendChild(element);
}

function moveEnemy(id) {
    var enemy = undefined;
    for (var i = 0; i < enemies.length; i++) {
        if (enemies[i].id == id) {
            enemy = enemies[i]
        }
    }
    if (!enemy.dead) {
        var to_go = pathFind(enemy.x, enemy.y, player.x, player.y);
        enemy.goTo(to_go[0], to_go[1]);
        if ((getRandomInt(0, 25) < 2) && (enemy.just_put > 4)) {
            putBomb(bombs, enemy.getX(), enemy.getY(), ++bombsCounter, ++firesCounter);
            enemy.just_put = 0;
        } else {

            if ((dist(enemy.x, enemy.y, player.x, player.y) < 3) && (enemy.just_put > 4)) {
                putBomb(bombs, enemy.getX(), enemy.getY(), ++bombsCounter, ++firesCounter);
                enemy.just_put = 0;
            }
        }
        enemy.just_put += 1;
    } else {
        clearInterval(enemy.interval)
    }
}

function generateEnemy() {

    setTimeout(function () {

        var i = getRandomInt(0, (sizeOfMap - sizeOfTile) / sizeOfTile);
        var j = getRandomInt(0, (sizeOfMap - sizeOfTile) / sizeOfTile);
        while (!checkCollisions(i, j) || (dist(i, j, player.x, player.y) < 5)) {

            i = getRandomInt(0, (sizeOfMap - sizeOfTile) / sizeOfTile);
            j = getRandomInt(0, (sizeOfMap - sizeOfTile) / sizeOfTile);
        }
        var enemy = new Enemy(i, j)
        enemies.push(enemy);

        var id = getRandomInt(1, 10000);
        enemy.id = id;
        var enemyDiv = document.createElement('div');
        enemyDiv.setAttribute('id', enemy.id);
        enemyDiv.setAttribute('class', 'enemy');
        enemyDiv.style.position = "absolute";
        enemyDiv.style.width = sizeOfTile + "px";
        enemyDiv.style.height = sizeOfTile + "px";
        enemyDiv.style.zIndex = enemyIndex;
        enemyDiv.style.backgroundRepeat = "no-repeat";
        enemyDiv.style.backgroundSize = "100% 100%";

        var im = function(){
           var a=Math.floor(Math.random()*2+1);
            if(a==1){
                return enemyImage;
            } else{
                return "url(images/ninja.png)";
            }
        }
        enemyDiv.style.backgroundImage = im();

        enemyDiv.style.left = enemy.getX() * sizeOfTile + "px";
        enemyDiv.style.top = enemy.getY() * sizeOfTile + "px";
        document.getElementById("field").appendChild(enemyDiv);

        enemy.interval = setInterval(function () {
            moveEnemy(enemy.id)
        }, getRandomInt(800, 2000));

    }, getRandomInt(1, 500))
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
    if (newX > 10 || newX < 0 || newY > 10 || newY < 0)
        return false;

    //Enemy
    for (var i = 0; i < enemies.length; i++) {
        if (!enemies[i].dead) {
            if (enemies[i].getX() == newX && enemies[i].getY() == newY) {
                //console.log('enemy here!')
                if (typeof fire === "undefined") {
                    //return false;
                } else {
                    //console.log('need to kill')
                    var enemyDivs = document.getElementsByClassName("enemy");
                    for (var j = 0; j < enemyDivs.length; j++) {
                        if (enemies[i].id == enemyDivs[j].getAttribute('id')) {
                            //console.log('staring to kill')
                            enemyDivs[j].style.display = "None";
                            enemyDivs[j].parentNode.removeChild(enemyDivs[j]);
                            enemies[i].dead = true;
                            if (fire == "byplayer") {
                                score += 20;
                            }
                            //console.log('killed')
                            //return true;
                        }
                    }

                }
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
                //return true;
                break;
            }

        }
    }
//Bombs
    for (var i = 0; i < bombs.length; ++i) {
        if (bombs[i].getX() == newX && bombs[i].getY() == newY) {
            //return false;
        }
    }

    if (typeof player === "undefined") {
        //return true;
    } else {
        for (var i = 0; i < fires.length; ++i) {
            if (fires[i].getX() == newX && fires[i].getY() == newY) {
                on_pause = true;
                $('#over').show();
                $('#field').hide();
                $('#manag').hide();
                $('#score').text(score);
                $('#controls_container').hide();
                $('#score_container').hide();

                $('#bombControl').hide();
                for (var e = 0; e < enemies.length; e++) {
                    clearInterval(enemies[e].interval);
                }
                enemies = []
                return true;
            }
        }

    }


    if (typeof isenemy === "undefined") {
        //return true;
    } else {
        for (var i = 0; i < fires.length; ++i) {
            if (fires[i].getX() == newX && fires[i].getY() == newY) {
                for (var p = 0; p < enemies.length; ++p) {
                    if (fires[i].getX() == enemies[p].x && fires[i].getY() == enemies[p].y) {
                        var enemyDivs = document.getElementsByClassName("enemy");
                        for (var j = 0; j < enemyDivs.length; j++) {
                            if (enemies[p].id == enemyDivs[j].getAttribute('id')) {
                                enemyDivs[j].style.display = "None";
                                enemies[p].dead = true;
                                if (fires[i].byplayer) {
                                    score += 20;
                                }
                                return true;
                            }
                        }
                    }
                }

                return false;
            }
        }

    }

    return true;
}

function createObjects() {
    var i, j;
    var id;

    score = 0;

    bombs = []
    enemies = []
    blocks = []
    background = []
    boxes = []
    fires = []
    var element;
    //Player
    player.setX(0);
    player.setY(0);

    //Enemy

    removeElement('background');
    removeElement('boxes')
    removeElement('blocks')
    removeElement('enemies')
    removeElement('fires')
    removeElement("field");


    var element = document.createElement('div');
    element.setAttribute('id', 'field');
    element.style.position = "absolute";
    element.style.left = "0px";
    element.style.top = "0px";
    document.body.appendChild(element);


    //Background
    var backgroundDiv = document.createElement('div');
    backgroundDiv.setAttribute('id', 'background');
    backgroundDiv.style.position = "absolute";
    backgroundDiv.style.left = "0px";
    backgroundDiv.style.top = "0px";
    backgroundDiv.style.zIndex = backgroundIndex;
    element.appendChild(backgroundDiv);

    //Blocks
    var blocksDiv = document.createElement('div');
    blocksDiv.setAttribute('id', 'blocks');
    blocksDiv.style.position = "absolute";
    blocksDiv.style.left = "px";
    blocksDiv.style.top = "0px";
    blocksDiv.style.zIndex = blocksIndex;
    document.getElementById("field").appendChild(blocksDiv);

    //Player
    var playerDiv = document.createElement('div');
    playerDiv.setAttribute('id', 'player');
    playerDiv.style.position = "absolute";
    playerDiv.style.left = player.getX() * sizeOfTile + "px";
    playerDiv.style.top = player.getY() * sizeOfTile + "px";
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
        id = getRandomInt(1, 1000);
        boxes[i].id = id;
        element = document.createElement('div');
        element.setAttribute('class', 'box');
        element.setAttribute('id', "box_" + id.toString());
        element.style.position = "absolute";
        element.style.left = boxes[i].getX() * sizeOfTile + "px";
        element.style.top = boxes[i].getY() * sizeOfTile + "px";
        element.style.width = sizeOfTile + "px";
        element.style.height = sizeOfTile + "px";
        element.style.backgroundImage = boxImage;
        element.style.zIndex = boxIndex;
        boxDiv.appendChild(element);
    }

    //Background
    background.splice(0, background.length);
    for (i = 0; i < numberOfTiles; ++i) {
        for (j = 0; j < numberOfTiles; ++j) {
            background.push(new BackgroundTile(i, j));
        }
    }
    //Block of the field
    blocks.splice(0, blocks.length);
    for (var p = 0; p < 5; p++) {
        for (k = 0; k < 5; ++k) {
            blocks.push(new Block(p * 2 + 1, k * 2 + 1));
        }
    }
    //Box
    boxes.splice(0, boxes.length);
    for (k = 0; k < 15; ++k) {
        generateBox()
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
        element.style.left = blocks[i].getX() * sizeOfTile + "px";
        element.style.top = blocks[i].getY() * sizeOfTile + "px";
        element.style.width = sizeOfTile + "px";
        element.style.height = sizeOfTile + "px";
        element.style.backgroundImage = blockImage;
        //element.style.zIndex = blocksIndex;
        blocksDiv.appendChild(element);
    }

    bombDiv = document.createElement('div');
    bombDiv.setAttribute('id', 'bombs');
    bombDiv.style.position = "absolute";
    bombDiv.style.left = "0px";
    bombDiv.style.top = "0px";
    document.getElementById("field").appendChild(bombDiv);

    //Boxes
    var boxDiv = document.getElementById('boxes');
    boxDiv.innerHTML = "";
    for (var i = 0; i < boxes.length; ++i) {
        id = getRandomInt(1, 1000);
        boxes[i].id = id;
        element = document.createElement('div');
        element.setAttribute('class', 'box');
        element.setAttribute('id', "box_" + id.toString());
        element.style.position = "absolute";
        element.style.left = boxes[i].getX() * sizeOfTile + "px";
        element.style.top = boxes[i].getY() * sizeOfTile + "px";
        element.style.width = sizeOfTile + "px";
        element.style.height = sizeOfTile + "px";
        element.style.backgroundImage = boxImage;
        element.style.zIndex = boxIndex;
        boxDiv.appendChild(element);
    }

    enemies = new Array();
    for (var k = 0; k < 3; ++k) {
        generateEnemy();
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

    var map_size = sizeOfMap / sizeOfTile;
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
    while (count < 50) {
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
            if ((x + 1 <= map_size) && (map[y][x + 1] == 0)) {
                map[y][x + 1] = count;
                new_queuex.push(x + 1);
                new_queuey.push(y);
            }
            if ((x - 1 >= 0) && (map[x - 1][y] == 0)) {
                map[y][x - 1] = count;
                new_queuex.push(x - 1);
                new_queuey.push(y);
            }
            if ((y + 1 <= map_size) && (map[y + 1][x] == 0)) {
                map[y + 1][x] = count;
                new_queuex.push(x);
                new_queuey.push(y + 1);
            }
            if ((y - 1 >= 0) && (map[y - 1][x] == 0)) {
                map[y - 1][x] = count;
                new_queuex.push(x);
                new_queuey.push(y - 1);
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