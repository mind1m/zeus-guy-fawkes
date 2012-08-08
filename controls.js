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
    //var item = document.getElementById('item');

    if (dir == 'left') {
        //alert('left');
        //item.style.left -= px+"px";
        player.goLeft();
    }

    if (dir == 'right') {
        //alert('right');
        //item.style.right += px+"px";
        //debugger;
        player.goRight();
    }

    if (dir == 'top') {
        //alert('top');
        //item.style.top += px+"px";
        player.goUp();
    }

    if (dir == 'bottom') {
        //alert('bottom');
        //item.style.top -= px+"px";
        player.goDown();
    }

    //document.body.apendChild(img);
}