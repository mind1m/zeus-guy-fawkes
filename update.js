/**
 * Created with JetBrains WebStorm.
 * User: V
 * Date: 09.08.12
 * Time: 10:52
 * To change this template use File | Settings | File Templates.
 */
function update(bombs) {
    //Bombs
    if (bombs.length != 0) {
        for (var i = 0; i < bombs.length; ++i) {
            //Bomb
            var bombDiv = document.createElement('div');
            bombDiv.setAttribute('id', 'bomb');
            bombDiv.setAttribute('number', i.toString());
            bombDiv.style.position = "absolute";
            bombDiv.style.left = sizeOfTile * bombs[i].getX()+ "px";
            bombDiv.style.top = sizeOfTile * bombs[i].getY()+ "px";
            bombDiv.style.width = sizeOfTile + "px";
            bombDiv.style.height = sizeOfTile + "px";
            bombDiv.style.zIndex = bombIndex;
            bombDiv.style.backgroundImage = bombImage;
            document.getElementById("bombs").appendChild(bombDiv);
        }
    }
}