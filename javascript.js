const gridContainer = document.querySelector('#grid-container');

let userInput = 4;
let squares = userInput * userInput;

for (var i = 0; i < squares; i++) {
    const gridBox = document.createElement('div');
    gridBox.classList.add('gridbox')
    gridContainer.appendChild(gridBox);
    let gridHover = document.getElementsByClassName('gridbox')[i];

    gridHover.addEventListener("mouseover", function( event ) {
    event.target.style.backgroundColor = "green";
});
};


// '#' + Math.random().toString(16).substr(-6); rando color generator, but doesnt keep the color. lol.