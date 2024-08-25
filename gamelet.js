/*
    Intructions:
    Ball that moves with keys
*/

const ball = document.getElementById('ball'); // get the ball
document.addEventListener('keydown', handleKeyPress); // listen for keys
let position = 0; // set initial position to 0

/*
    handleKeyPress
    responds to certain key presses by updating position
*/

function handleKeyPress(e) {
    if (e.code === 'ArrowLeft') {
        position = position - 10;
    }
    if (e.code === 'ArrowRight') {
        position = position + 10;
    }

    if (position < 0) {
        position = 0;
    }
    /*
        refresh
        changes the position of the ball
    */
    refresh(); // reposition the ball
    function refresh() {
        ball.style.top = position + 'px';
    }
};
