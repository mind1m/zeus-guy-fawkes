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

function putBomb(bombs, x,y) {
    bombs.push(new Bomb(x, y));
}