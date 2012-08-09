/*var goTo = function(dir, px) {
    var item = document.getElementById('item');
    if (dir == 'l') {
        //item.scrollLeft -= px;
        //alert('left');
        item.style.left = 50+"px";
    }
    else if (dir == 'r') {
        item.scrollLeft += px;
    }
}*/

function goTo(dir, px, player){

    if (dir == 'left') {
        player.goLeft();
    }

    if (dir == 'right') {
        player.goRight();
    }

    if (dir == 'top') {
        player.goUp();
    }

    if (dir == 'bottom') {
        player.goDown();
    }
}

function putBomb(bombs, x,y, bombsCounter) {
    bombs.push(new Bomb(x, y, bombsCounter));
    var bombsDiv = document.getElementById("bombs");
    var bombDiv = document.createElement('div');
    bombDiv.setAttribute('id', bombs[bombs.length - 1].getID().toString());
    bombDiv.setAttribute('class', "bomb");
    bombDiv.style.visibility = "hidden";
    bombDiv.style.position = "absolute";
    bombDiv.style.width = sizeOfTile + "px";
    bombDiv.style.height = sizeOfTile + "px";
    bombDiv.style.zIndex = bombIndex;
    bombDiv.style.backgroundImage = bombImage;
    document.getElementById("bombs").appendChild(bombDiv);
    setTimeout(function() {
        bombs.splice(0, 1);
        bombsDiv.removeChild(bombDiv);
    },2000);
}