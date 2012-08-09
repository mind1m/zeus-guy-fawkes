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

function putBomb(bombs,fires, x,y, bombsCounter, firesCounter) {
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

    var fireContainer = document.createElement('div');
    fireContainer.style.position = "absolute";
    fireContainer.style.left = "0px";
    fireContainer.style.top = "0px";

    document.getElementById("bombs").appendChild(bombDiv);
    bombDiv.appendChild(fireContainer);
    setTimeout(function() {
        bombs.splice(0, 1);
        bombsDiv.removeChild(bombDiv);

        if (checkCollisions(x+1,y)) {
            putFire(fireContainer, firesCounter, fires, x+1,y);
            if (checkCollisions(x+2,y)) {
                putFire(fireContainer, firesCounter, fires, x+2,y);
            }
        }

        if (checkCollisions(x-1,y)) {
            putFire(fireContainer, firesCounter, fires, x-1,y);
            if (checkCollisions(x-2,y)) {
                putFire(fireContainer, firesCounter, fires, x-2,y);
            }
        }

        if (checkCollisions(x,y+1)) {
            putFire(fireContainer, firesCounter, fires, x,y+1);
            if (checkCollisions(x,y+2)) {
                putFire(fireContainer, firesCounter, fires, x,y+2);
            }
        }

        if (checkCollisions(x,y-1)) {
            putFire(fireContainer, firesCounter, fires, x,y-1);
            if (checkCollisions(x,y-2)) {
                putFire(fireContainer, firesCounter, fires, x,y-2);
            }
        }

        setTimeout(function(){
            fires = [];
            fireContainer.remove();
        }, 1000)
    },2000);
}

function putFire(fireContainer, firesCounter, fires,x,y) {
    fires.push(new Fire(x, y, firesCounter));
    var fireDiv = document.createElement('div');
    fireDiv.setAttribute('class', "fire");
    fireDiv.setAttribute('id', fires[fires.length - 1].getID().toString());
    fireDiv.style.visibility = "hidden";
    fireDiv.style.position = "absolute";
    fireDiv.style.width = sizeOfTile + "px";
    fireDiv.style.height = sizeOfTile + "px";
    fireDiv.style.zIndex = bombIndex;
    fireDiv.style.backgroundColor = "#121212";
    fireContainer.appendChild(fireDiv);
}