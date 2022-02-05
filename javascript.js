const gridContainer = document.querySelector('#grid-container');

let userInput = prompt("Please enter a number between 1-100");


function resetPrompt() {
    window.location.reload();

    if (userInput < 101 && userInput > 0) {
        return;
    } else {
        alert ("please enter a valid number")
        return resetPrompt();
    };
};

let squares = userInput * userInput;
function makeGrid (rows, cols) {

        gridContainer.style.setProperty('--grid-rows', rows);
        gridContainer.style.setProperty('--grid-cols', cols);

    for (var i = 0; i < (rows * cols); i++) {

        let gridBox = document.createElement('div');
        gridBox.classList.add('gridbox');
        gridContainer.appendChild(gridBox);
        let gridHover = document.getElementsByClassName('gridbox')[i];

        gridHover.addEventListener("mouseover", function( event ) {
        event.target.style.backgroundColor = '#' + Math.random().toString(16).substr(-6);
});
};
};

makeGrid(userInput, userInput);

