/**
 * Created with JetBrains WebStorm.
 * User: V
 * Date: 06.08.12
 * Time: 11:18
 * To change this template use File | Settings | File Templates.
 */
function draw(backGround) {
    var element;
    for (var i = 0; i < backGround.getNumberOfTiles(); ++i) {
        for (var j = 0; j < backGround.getNumberOfTiles(); ++j) {
            element = document.createElement('div');
            element.style.position = "absolute";
            element.style.left = backGround.getSizeOfTile() * i + "px";
            element.style.top = backGround.getSizeOfTile() * j + "px";
            element.style.width = backGround.getSizeOfTile() + "px";
            element.style.height = backGround.getSizeOfTile() + "px";
            element.style.backgroundImage = "url(images/background.gif)";
            document.getElementsByTagName("body")[0].appendChild(element);
        }
    }
}