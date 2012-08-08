/**
 * Created with JetBrains WebStorm.
 * User: V
 * Date: 08.08.12
 * Time: 14:33
 * To change this template use File | Settings | File Templates.
 */
function draw(player,bomb) {
    //Player
    var playerDiv = document.getElementById("player");
    playerDiv.style.left = player.getX() + "px";
    playerDiv.style.top = player.getY() + "px";

    var bombDiv = document.getElementById("bomb")
    bombDiv.style.left = bomb.getX() + "px";
    bombDiv.style.top = bomb.getY() + "px";

}

