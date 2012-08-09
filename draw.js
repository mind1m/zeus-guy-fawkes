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
        for (var i = 0; i < bombs.length; ++i) {
            for (var j = 0; j < bombDivs.length; ++j) {
                if (bombDivs[j].getAttribute("id") == bombs[i].getID()) {
                    if (bombDivs[j].style.visibility == "hidden") {
                        bombDivs[j].style.visibility = "visible";
                    }
                    bombDivs[j].style.top = bombs[i].getY() + "px";
                    bombDivs[j].style.left = bombs[i].getX() + "px";
                    break;
                }
            }
        }
    }
}

