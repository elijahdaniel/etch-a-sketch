// grid 
function createGrid(num) {
for (var i = 0; i < num; i++) {
    for (var j = 0; j < num; j++) {
        var divGrid = document.createElement('div');
        divGrid.style.width = '16px';
        divGrid.style.height = '16px';
        divGrid.style.background = 'white';
        divGrid.style.border = '1px solid lightgray';
        divGrid.addEventListener('mouseover', hoverOver);
        container.appendChild(divGrid);
    }
    var breakGrid = document.createElement('br');
    container.appendChild(breakGrid);
    }
}

// eventListener
function hoverOver() {
    event.target.style.backgroundColor = "rgb(" + randomColor() + ","  + randomColor() + "," + randomColor() + ")";
}

// random color picker
function randomColor() {
    let randomColor = Math.floor(Math.random() * 255);
    return randomColor;
}

createGrid(35);