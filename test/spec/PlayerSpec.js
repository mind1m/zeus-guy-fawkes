/**
 * Created with JetBrains WebStorm.
 * User: user
 * Date: 08.08.12
 * Time: 10:47
 * To change this template use File | Settings | File Templates.
 */

describe("Player must go", function() {
    var player = new Player(0,0);
    it("initial pos", function(){
        expect(player.getX()).toEqual(0);
        expect(player.getY()).toEqual(0);
    })
    it("should go to the left side", function() {

        var xpos=player.getX();
        var ypos=player.getY();
        player.goLeft();
        expect(player.x).toBeLessThan(xpos);
    });

    it("should go to the right side", function() {
        var xpos=player.getX();
        var ypos=player.getY();
        player.goRight();
        expect(player.x).toBeGreaterThan(xpos);
    });
});


describe("Player must go", function() {
    var player = new Player(0,0);
    it("initial pos", function(){
        expect(player.getX()).toEqual(0);
        expect(player.getY()).toEqual(0);
    })
    it("should go up", function() {

        var xpos=player.getX();
        var ypos=player.getY();
        player.goUp();
        expect(player.y).toBeGreaterThan(ypos);
    });

    it("should go down", function() {
        var xpos=player.getX();
        var ypos=player.getY();
        player.goDown();
        expect(player.y).toBeLessThan(ypos);
    });
});

