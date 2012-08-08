/**
 * Created with JetBrains WebStorm.
 * User: Haret
 * Date: 06.08.12
 * Time: 14:28
 * To change this template use File | Settings | File Templates.
 */
function Bomb(){
    var x;
    var y;
    var timer;
    var power;
    this.getX = function(){
        return this.x;
    };
    this.getY = function(){
        return this.y;
    };
    this.setXY = function(newX,newY){
        this.x = newX;
        this.y = newY;
    };
    this.getPower=function(){
        return newPower;
    };
    this.setPower=function(newPower){
        this.power=newPower;
    };
    this.setTimer = function(newTime){
        this.timer = newTime;
    };

    this.explose = function(){
            return true;
    };
}