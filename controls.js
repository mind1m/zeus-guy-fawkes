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

function putBomb(bombs, x,y, bombsCounter, firesCounter, byplayer) {
    bombs.push(new Bomb(x, y, bombsCounter));
    var bombsDiv = document.getElementById("bombs");

    var bombContainer = document.createElement('div');
    bombContainer.style.position = "absolute";
    bombContainer.style.left = "0px";
    bombContainer.style.top = "0px";
    document.getElementById("bombs").appendChild(bombContainer);

    var bombDiv = document.createElement('div');
    bombDiv.setAttribute('id', bombs[bombs.length - 1].getID().toString());
    bombDiv.setAttribute('class', "bomb");
    bombDiv.style.visibility = "hidden";
    bombDiv.style.position = "absolute";
    bombDiv.style.width = sizeOfTile + "px";
    bombDiv.style.height = sizeOfTile + "px";
    bombDiv.style.zIndex = bombIndex;
    bombDiv.overflowStyle = "visible";
    bombDiv.style.backgroundImage = bombImage;

    var fireContainer = document.createElement('div');
    fireContainer.className = "firecontainer";
    fireContainer.style.position = "absolute";
    fireContainer.style.left = "0px";
    fireContainer.style.top = "0px";

    bombContainer.appendChild(bombDiv);
    bombContainer.appendChild(fireContainer);
    if (typeof byplayer === "undefined") {
        byplayer = true;
    }
    setTimeout(function() {
        bombs.splice(0, 1);
        var ids = [];
        bombContainer.removeChild(bombDiv);
        checkCollisions(x,y,byplayer)
        ids.push(putFire(fireContainer, firesCounter, fires, x,y, byplayer));
        if (checkCollisions(x+1,y, byplayer)) {
            ids.push(putFire(fireContainer, firesCounter, fires, x+1,y, byplayer));
            if (checkCollisions(x+2,y, byplayer)) {
                ids.push(putFire(fireContainer, firesCounter, fires, x+2,y, byplayer));
            }
        }

        if (checkCollisions(x-1,y, byplayer)) {
            ids.push(putFire(fireContainer, firesCounter, fires, x-1,y, byplayer));
            if (checkCollisions(x-2,y, byplayer)) {
                ids.push(putFire(fireContainer, firesCounter, fires, x-2,y, byplayer));
            }
        }

        if (checkCollisions(x,y+1, byplayer)) {
            ids.push(putFire(fireContainer, firesCounter, fires, x,y+1, byplayer));
            if (checkCollisions(x,y+2, byplayer)) {
                ids.push(putFire(fireContainer, firesCounter, fires, x,y+2, byplayer));
            }
        }

        if (checkCollisions(x,y-1, byplayer)) {
            ids.push(putFire(fireContainer, firesCounter, fires, x,y-1, byplayer));
            if (checkCollisions(x,y-2, byplayer)) {
                ids.push(putFire(fireContainer, firesCounter, fires, x,y-2, byplayer));
            }
        }

        setTimeout(function(){
            for (var i = 0; i < ids.length; i++) {
                for (var j = 0; j < fires.length; j++) {
                    if (fires[j].id == ids[i]) {
                        fires.splice(j ,1);
                        break;
                    }
                }
            }
            fireContainer.parentNode.removeChild(fireContainer);
        }, 1000)
    },2500);
}

function putFire(fireContainer, firesCounter, fires,x,y, byplayer) {
    var id = getRandomInt(1,100000);
    newfire = new Fire(x, y, id)
    if (!typeof byplayer === "undefined") {
        newfire.byplayer = true;
    }
    fires.push(newfire);

    var fireDiv = document.createElement('div');
    fireDiv.setAttribute('class', "fire");
    fireDiv.setAttribute('id', fires[fires.length - 1].getID().toString());
    fireDiv.style.visibility = "hidden";
    fireDiv.style.position = "absolute";
    fireDiv.style.width = sizeOfTile + "px";
    fireDiv.style.height = sizeOfTile + "px";
    fireDiv.style.zIndex = bombIndex;
    fireDiv.style.backgroundColor = "#FF9900";
    fireContainer.appendChild(fireDiv);
    return id;
}