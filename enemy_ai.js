/**
 * Created with JetBrains WebStorm.
 * User: V
 * Date: 11.08.12
 * Time: 11:54
 * To change this template use File | Settings | File Templates.
 */
function getPath(player, enemy, backGround, blocks, boxes) {
    var pun10 = true;
    var i, j,
        Ni = 0,
        Nk = 16;
    //Field
    var dots = new Array();
    //Background
    for (i = 0; i < numberOfTiles; ++i) {
        dots[i] = new Array();
        for (j = 0; j < numberOfTiles; ++j) {
            dots[i][j] = 254;
        }
    }
    //Blocks
    for (i = 0; i < blocks.length; ++i) {
        dots[blocks[i].getY()][blocks[i].getX()] = 255;
    }
    //Boxes
    for (i = 0; i < boxes.length; ++i) {
        dots[boxes[i].getY()][boxes[i].getX()] = 255;
    }
    //Player
    dots[player.getY()][player.getX()] = 0;
    //Enemy
    dots[enemy.getY()][enemy.getX()] = 253;

    punkt5: while (true) {
        punktMoi: while (true) {
        for (i = 0; i < dots.length; ++i) {
            for (j = 0; j < dots[i].length; ++j) {
                if (dots[i][j] == Ni) {
                    //i+1, j
                    if (i+1 <= dots.length) {
                    if (dots[i+1][j] == 253) {
                        break punktMoi;
                        pun10 = false;
                    } else if (dots[i+1][j] == 254) {
                        dots[i+1][j] = Ni+1;
                    }
                    }
                    //i-1, j
                    if (i-1 >= 0) {
                    if (dots[i-1][j] == 253) {
                        break punktMoi;
                        pun10 = false;
                    } else if (dots[i-1][j] == 254) {
                        dots[i-1][j] = Ni+1;
                    }
                    }
                    //i, j+1
                    if (j+1 <= dots[i].length) {
                    if (dots[i][j+1] == 253) {
                        break punktMoi;
                        pun10 = false;
                    } else if (dots[i][j+1] == 254) {
                        dots[i][j+1] = Ni+1;
                    }
                    }
                    //i, j-1
                    if (j-1 >= 0) {
                    if (dots[i][j-1] == 253) {
                        break punktMoi;
                        pun10 = false;
                    } else if (dots[i][j-1] == 254) {
                        dots[i][j-1] = Ni+1;
                    }
                    }
                }
            }
        }
        }
        if (pun10 = true) {
            Ni++;
            if (Ni > Nk) {
                return;
            }
            continue punkt5;
        }
        while (true) {
            var x, y;
            x = enemy.getX();
            y = enemy.getY();
            punkt11: while (true) {
                var dot = {x: x+1, y: y};
                var min = dots[x+1][y];
                if (dots[x-1][y] < min) {
                    min = dots[x-1][y];
                    dot = {x: x-1, y: y};
                }
                if (dots[x][y-1] < min) {
                    min = dots[x][y-1];
                    dot = {x: x, y: y-1};
                }
                if (dots[x][y+1] < min) {
                    min = dots[x][y+1];
                    dot = {x: x, y: y+1};
                }
                var x1 = x,
                    y1 = y;
                enemy.setX(x1);
                enemy.setY(y1);
                if (dots[x1][y1] == 0) {
                    return;
                }
                x = x1;
                y = y1;
                continue punkt11;
            }
        }
    }
}