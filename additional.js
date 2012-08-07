/**
 * Created with JetBrains WebStorm.
 * User: V
 * Date: 06.08.12
 * Time: 15:13
 * To change this template use File | Settings | File Templates.
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function clearDOM() {
    var field = document.getElementById("field");
    while ( field.childNodes.length >= 3 )
    {
        field.removeChild(field.firstChild);
    }

}