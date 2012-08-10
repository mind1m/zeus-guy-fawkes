create = function(map){
    var xren;
    for(i=0; i<map.getNumTiles();i++){
        for(j=0;j<map.getNumTiles();j++){
            create=document.createElement('div');
            create.style.position='absolute';
            create.style.left=map.getTileSize()* j + "px";
            create.style.top=map.getTileSize()* i + "px";
            create.style.height=map.getTileSize();
            create.style.width=map.getTileSize();
            create.style.backgroundColor="red";
            create.style.border = "#CCCCCC 1px solid";
        }
    }
}