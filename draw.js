/**
 * Created with JetBrains WebStorm.
 * User: V
 * Date: 06.08.12
 * Time: 11:18
 * To change this template use File | Settings | File Templates.
 */
function draw(backGround, blocks) {
    var element;
    //Background
    for (var i = 0; i < backGround.getTiles().length; ++i) {
            element = document.createElement('div');
            element.style.position = "absolute";
            element.style.left = backGround.getSizeOfTile() * backGround.getTiles()[i].x+ "px";
            element.style.top = backGround.getSizeOfTile() * backGround.getTiles()[i].y + "px";
            element.style.width = backGround.getSizeOfTile() + "px";
            element.style.height = backGround.getSizeOfTile() + "px";
            element.style.backgroundImage = backGround.getImagePath();
            //document.getElementsByTagName("body")[0].appendChild(element);
            document.getElementById("main").appendChild(element);
    }
    //Blocks
    for (var i = 0; i < blocks.length; ++i) {
        element = document.createElement('div');
        element.style.position = "absolute";
        element.style.left = blocks[i].getSizeOfTile() * blocks[i].getX()+ "px";
        element.style.top = blocks[i].getSizeOfTile() * blocks[i].getY() + "px";
        element.style.width = blocks[i].getSizeOfTile() + "px";
        element.style.height = blocks[i].getSizeOfTile() + "px";
        //element.style.backgroundImage = blocks[i].getImagePath();
        element.style.backgroundColor = "red";
        //document.getElementsByTagName("body")[0].appendChild(element);
        document.getElementById("main").appendChild(element);
    }
}