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
                alert("Boooooooooom!");
                return false;
            }
        }

    }



    return true;
}