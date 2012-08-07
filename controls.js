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

function goTo(dir, px){
    //var item = document.getElementById('item');

    if (dir == 'left') {
        alert('left');
        //item.style.left -= px+"px";
    }

    if (dir == 'right') {
        alert('right');
        //item.style.right += px+"px";
    }

    if (dir == 'top') {
        alert('top');
        //item.style.top += px+"px";
    }

    if (dir == 'bottom') {
        alert('bottom');
        //item.style.top -= px+"px";
    }

    //document.body.apendChild(img);
}