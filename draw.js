/**
 * Created with JetBrains WebStorm.
 * User: V
 * Date: 08.08.12
 * Time: 14:33
 * To change this template use File | Settings | File Templates.
 */
function draw(player,bombs) {
    //Player
    var playerDiv = document.getElementById("player");
    playerDiv.style.left = player.getX() + "px";
    playerDiv.style.top = player.getY() + "px";

    //Bombs
    if (bombs.length != 0) {
        var bombDivs = document.getElementsByClassName("bomb");
        for (var i = 0; i < bombDivs.length; ++i) {
            bombDivs[i].style.top = bombs[bombDivs[i].getAttribute("id")].getY() + "px";
            bombDivs[i].style.left = bombs[bombDivs[i].getAttribute("id")].getX() + "px";
        }
    }
}

