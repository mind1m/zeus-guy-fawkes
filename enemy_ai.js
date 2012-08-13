/**
 * Created with JetBrains WebStorm.
 * User: V
 * Date: 13.08.12
 * Time: 10:49
 * To change this template use File | Settings | File Templates.
 */
function followObject() {
    var stack = new Array();
    var outStack = new Array();
    //0 - good, 1 - bad, 2 - finish position, 3 - start position, 4 - passed
    var map = getArrayOfMap();
    //Player
    map[player.getY()][player.getX()] = 2;
    //Enemy
    map[enemy.getY()][enemy.getX()] = 3;
    //First iteration
    //Right position
    if (enemy.getY() == player.getY() && enemy.getX() == player.getX()) {
        return;
    }
    //y - 1
    if (enemy.getY() - 1 >= 0) {
        if (map[enemy.getY() - 1][enemy.getX()] == 0 || map[enemy.getY() - 1][enemy.getX()] == 2) {
            stack.push({y: enemy.getY() - 1, x: enemy.getX(), id: outStack.length, parent: "none"});
            outStack.push({y: enemy.getY() - 1, x: enemy.getX(), id: outStack.length, parent: "none"});
            map[enemy.getY() - 1][enemy.getX()] = 4;
        }
    }
    //y + 1
    if (enemy.getY() + 1 < numberOfTiles) {
        if (map[enemy.getY() + 1][enemy.getX()] == 0 || map[enemy.getY() + 1][enemy.getX()] == 2) {
            stack.push({y: enemy.getY() + 1, x: enemy.getX(), id: outStack.length, parent: "none"});
            outStack.push({y: enemy.getY() + 1, x: enemy.getX(), id: outStack.length, parent: "none"});
            map[enemy.getY() + 1][enemy.getX()] = 4;
        }
    }
    //x - 1
    if (enemy.getX() - 1 < numberOfTiles) {
        if (map[enemy.getY()][enemy.getX() - 1] == 0 || map[enemy.getY()][enemy.getX() - 1] == 2) {
            stack.push({y: enemy.getY(), x: enemy.getX() - 1, id: outStack.length, parent: "none"});
            outStack.push({y: enemy.getY(), x: enemy.getX() - 1, id: outStack.length, parent: "none"});
            map[enemy.getY()][enemy.getX() - 1] = 4;
        }
    }
    //x + 1
    if (enemy.getX() + 1 < numberOfTiles) {
        if (map[enemy.getY()][enemy.getX() + 1] == 0 || map[enemy.getY()][enemy.getX() + 1] == 2) {
            stack.push({y: enemy.getY(), x: enemy.getX() + 1, id: outStack.length, parent: "none"});
            outStack.push({y: enemy.getY(), x: enemy.getX() + 1, id: outStack.length, parent: "none"});
            map[enemy.getY()][enemy.getX() + 1] = 4;
        }
    }
    while (stack.length != 0) {
        //Finish
        if (stack[0].y == player.getY() && stack[0].x == player.getX()) {
            var lastID = stack[0].id;
            var lastParent = outStack[lastID].parent;
            while (lastParent != "none") {
                lastID = lastParent;
                lastParent = outStack[lastID].parent;
            }
            enemy.setX(outStack[lastID].x);
            enemy.setY(outStack[lastID].y);
            return;
        }
        //y - 1
        if (stack[0].y - 1 >= 0) {
            if (map[stack[0].y - 1][stack[0].x] == 0  || map[stack[0].y - 1][stack[0].x] == 2) {
                stack.push({y: stack[0].y - 1, x: stack[0].x, id: outStack.length, parent: stack[0].id});
                outStack.push({y: stack[0].y - 1, x: stack[0].x, id: outStack.length, parent: stack[0].id});
                map[stack[0].y - 1][stack[0].x] = 4;
            }
        }
        //y + 1
        if (stack[0].y + 1 < numberOfTiles) {
            if (map[stack[0].y + 1][stack[0].x] == 0  || map[stack[0].y + 1][stack[0].x] == 2) {
                stack.push({y: stack[0].y + 1, x: stack[0].x, id: outStack.length, parent: stack[0].id});
                outStack.push({y: stack[0].y + 1, x: stack[0].x, id: outStack.length, parent: stack[0].id});
                map[stack[0].y + 1][stack[0].x] = 4;
            }
        }
        //x - 1
        if (stack[0].x - 1 < numberOfTiles) {
            if (map[stack[0].y][stack[0].x - 1] == 0  || map[stack[0].y][stack[0].x - 1] == 2) {
                stack.push({y: stack[0].y, x: stack[0].x - 1, id: outStack.length, parent: stack[0].id});
                outStack.push({y: stack[0].y, x: stack[0].x - 1, id: outStack.length, parent: stack[0].id});
                map[stack[0].y][stack[0].x - 1] = 4;
            }
        }
        //x + 1
        if (stack[0].x + 1 < numberOfTiles) {
            if (map[stack[0].y][stack[0].x + 1] == 0  || map[stack[0].y][stack[0].x + 1] == 2) {
                stack.push({y: stack[0].y, x: stack[0].x + 1, id: outStack.length, parent: stack[0].id});
                outStack.push({y: stack[0].y, x: stack[0].x + 1, id: outStack.length, parent: stack[0].id});
                map[stack[0].y][stack[0].x + 1] = 4;
            }
        }
        stack.splice(0, 1);
    }
}