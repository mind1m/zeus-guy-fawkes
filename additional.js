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
    while ( field.childNodes.length >= 3 )
    {
        field.removeChild(field.firstChild);
    }
}
function checkCollisions(newX, newY, fire,player) {
    //Screen limit
    if(newX*sizeOfTile >= sizeOfMap || newX*sizeOfTile < 0 || newY*sizeOfTile >= sizeOfMap || newY*sizeOfTile < 0)
        return false;

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
                var box_div = document.getElementById("box_"+boxes[i].id.toString());
                box_div.parentNode.removeChild(box_div);
                boxes.splice(i, 1);
                i = i-1;
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

    if (typeof player==="undefined"){
        return true;
    } else{
        for (var i = 0; i < fires.length; ++i) {
            if (fires[i].getX() == newX && fires[i].getY() == newY) {
                setTimeout(function() { $('#over').show();
                                        $('#field').hide();
                                        $('#manag').hide();}  ,600)
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


    //Background
    backGround.splice(0, background.length);
    for (i = 0; i < numberOfTiles; ++i) {
        for (j = 0; j < numberOfTiles; ++j) {
            backGround.push(new BackgroundTile(i,j));
        }
    }
    //Block of the field
    blocks.splice(0, blocks.length);
    for (k = 0; k < 5; ++k) {
        i = getRandomInt(0, (sizeOfMap - sizeOfTile)/sizeOfTile);
        j = getRandomInt(0, (sizeOfMap - sizeOfTile)/sizeOfTile);
        blocks.push(new Block(i, j));
    }
    //Box
    boxes.splice(0, boxes.length);
    for (k = 0; k < 10; ++k) {
        i = getRandomInt(0, (sizeOfMap - sizeOfTile)/sizeOfTile);
        j = getRandomInt(0, (sizeOfMap - sizeOfTile)/sizeOfTile);
        boxes.push(new Box(i, j));
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