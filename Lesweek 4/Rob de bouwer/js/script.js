//alle + knoppen
let addBrickButtons = document.getElementsByClassName("add-brick");
let colors = ['yellow', 'black', 'orange', 'blue'];

//alle - knoppen
let removeBrickButtons = document.getElementsByClassName("remove-brick");

for(let i=0; i < addBrickButtons.length; i++){
    addBrickButtons[i].addEventListener('click', function(event){
        addBrickToWall(i+1,colors[i]);
    })
}

let addBrickToWall = function(wallNumber, color){
    let wall = document.getElementById('wall-'+wallNumber);
    let brick = document.createElement('div');
    let brickClass = 'brick brick-' + color;
    brick.className = brickClass;
    wall.appendChild(brick);
}

for(let i=0; i < removeBrickButtons.length; i++){
    removeBrickButtons[i].addEventListener('click', function(event){
        removeBrickFromWall(i+1);
    })
}

let removeBrickFromWall = function(wallNumber){
    let wall = document.getElementById('wall-'+wallNumber);
    //eerste steen van de muur telkens verwijderen
    console.log(wall.childElementCount);
    //enkel als de muur stenen bevat, dan mag er een steen worden verwijderd
    if(wall.childElementCount > 0){
        wall.removeChild(wall.firstElementChild);
    }
}

let calculateButton = document.getElementById('btnCalculate');

calculateButton.addEventListener('click', function(event){
    //1. aantal stenen per muur
    countBricksPerWall();
    //2. grootste-kleinste muur
    //3. berekenenn van de kostprijs per muur
})


let countBricksPerWall = function(){
    /*let wall1 = document.getElementById('wall-1');
    let countBricks = wall1.childElementCount;
    let countBricksSpanElement = document.getElementById('wall-1-amountstones');
    countBricksSpanElement.textContent = countBricks + 'stenen';*/

    let numberofWalls = document.getElementsByClassName('wall').length;
    for(let i = 0; i < numberOfWalls; i++){
        let wall = document.getElementById('wall-'+(i+1));
        let countBricksSpanElement = document.getElementById('wall-'+(i+1)+'-amountstones');
        countBricksSpanElement.textContent = countBricks + 'stenen';
    }
}