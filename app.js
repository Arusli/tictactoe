let gameOver = false; //switch to true when game ends
let turn = 'x'; //alternate turns between x and o to determine what square will receive when clicked
let board = document.querySelector('.board');
let squares = document.querySelectorAll('.square');

for (element of squares) {
    element.state = 'blank';
}



board.addEventListener('click', (e) => {
    if (turn === 'x' && e.target.state === 'blank' && gameOver === false) {
        for (element of squares) {
            e.target.innerHTML = `<img src='../images/x.png'>`;
            e.target.style.backgroundColor = 'pink';
            e.target.state = 'x';
            turn = 'o';
        }
        console.log(e.target.state);
        checkGame();
        
    } else if (turn === 'o' && e.target.state === 'blank' && gameOver === false){
        for (element of squares) {
            e.target.innerHTML = `<img src='../images/o.png'>`;
            e.target.style.backgroundColor = 'lightblue';
            e.target.state = 'o';
            turn = 'x';
    }
            
            checkGame();
}
});

// Game Ending Logic

function checkGame() {

// builds arrays that are updated each time a player inputs x or o.
    const row1 = [
        squares[0].state,
        squares[1].state,
        squares[2].state
    ]
    
    const row2 = [
        squares[3].state,
        squares[4].state,
        squares[5].state
    ]
    
    const row3 = [
        squares[6].state,
        squares[7].state,
        squares[8].state
    ]
    
    const col1 = [
        squares[0].state,
        squares[3].state,
        squares[6].state
    ]
    
    const col2 = [
        squares[1].state,
        squares[4].state,
        squares[7].state
    ]
    
    const col3 = [
        squares[2].state,
        squares[5].state,
        squares[8].state
    ]
    
    const diag1 = [
        squares[0].state,
        squares[4].state,
        squares[8].state
    ]
    
    const diag2 = [
        squares[2].state,
        squares[4].state,
        squares[6].state
    ]
    
    const triplets = [
        row1,
        row2,
        row3,
        col1,
        col2,
        col3,
        diag1,
        diag2
    ]
    
    //this function gets passed into the array.every() method
    function checkXWinner(state) {
        return state === 'x';
    }
    
    function checkOWinner(state) {
        return state === 'o';
    }
    //array.every() method
    function xwinner(triplet) {
        return triplet.every(checkXWinner);
    }
    
    function owinner(triplet) {
        return triplet.every(checkOWinner);
    }

    // checks for winners
    for (i of triplets) {
        if (xwinner(i) === true || owinner(i) === true) {
            gameOver = true;
            document.querySelector('.announce').textContent = 'Game Over!';
            }
    }
} //end checkGame() function

   