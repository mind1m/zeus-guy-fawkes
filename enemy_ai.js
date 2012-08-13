/**
 * Created with JetBrains WebStorm.
 * User: V
 * Date: 13.08.12
 * Time: 10:49
 * To change this template use File | Settings | File Templates.
 */
function followObject() {
    //0 - good, 1 - bad, 2 - finish position, 3 - start position
    var map = getArrayOfMap();
    //Player
    map[player.getY()][player.getX()] = 2;
    //Enemy
    map[enemy.getY()][enemy.getX()] = 3;

}