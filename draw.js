/**
 * Created with JetBrains WebStorm.
 * User: V
 * Date: 08.08.12
 * Time: 14:33
 * To change this template use File | Settings | File Templates.
 */
function draw(player,bombs, fires) {
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

    //Fire
    if (fires.length != 0) {
        var fireDivs = document.getElementsByClassName("fire");
        for (var i = 0; i < fires.length; ++i) {
            for (var j = 0; j < fireDivs.length; ++j) {
                if (fireDivs[j].getAttribute("id") == fires[i].getID()) {
                    if (fireDivs[j].style.visibility == "hidden") {
                        fireDivs[j].style.visibility = "visible";
                    }
                    fireDivs[j].style.top = fires[i].getY() + "px";
                    fireDivs[j].style.left = fires[i].getX() + "px";
                    break;
                }
            }
        }
    }
}

