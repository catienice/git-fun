// The goal of Towers of Hanoi is to move a set of discs of different sizes from one peg to another while only allowing the player to take the topmost disc off the peg and not putting a larger disc on top of a smaller one.

// want to be able to print board horizontally
// must use map at least once to do so 
// starting board will log the 2D array to console like this:
// --- 5 4 3 2 1
// ---
// ---

// Our game will progress with the player:
//  submitting moves to the game and 
// the game accepting or rejecting the move and 
// updating the board if the move is allowed. 

// Remember, you must only move the top disc from the peg and you can't move a disc on top of another if it is bigger than that disc

// to-do:
// use map() to make game board
// create moveDisk function that takes two arguments: current peg and next peg
// remove last value of array and add it to next array (splice?)
// create restrictions that do not allow a larger number to be added to an array (compair new number to existing last number in array)
// only allow for last number in array to be moved (?)
// if move is rejected console.log reason and return un-updated board state
// create object responsible for updating board state ??
// create checkWinner function to see if player has put the disks on another peg in the right order
// create console.log that returns when game is won 
// and function that resets game




let board = [[5, 4, 3, 2, 1],
[],
[]]; 

// use map to create horizontal board view

let viewBoard = (board) => {
  let boardView = board.map(row => {
    return '--- ' + row.join(' ')
  }).join('\n\n');
  console.log(boardView);
};

// create function called moveDisk that takes two arguments
const moveDisk = (currPeg, nextPeg) => {
  let diskIndex = board[currPeg].pop();
  let destinationPeg = board[nextPeg];
  let nextPegLength = board[nextPeg].length
  let lastElement;
  if(nextPegLength < 1) {
    lastElement = 10;
  }else{ 
    lastElement = board[nextPeg][nextPegLength-1]
  }
  
  if(diskIndex < lastElement){
    destinationPeg.push(diskIndex);
  } else { 
  board[currPeg].push(diskIndex)
  console.log("You cannot move a larger disc on top of a smaller one.");
  };
  viewBoard(board);
  checkWinner();
};



let boardReset = () => {
  board = [[5, 4, 3, 2, 1],
[],
[]]; 
}
// create function called checkWinner 


let checkWinner = function () {
  let array0 = board[0]
  let array1 = board[1]
  let array2 = board[2]
  const winnerStatement = "Congrats! You have won!"
   if(array0.length === 0 && (array1.length === 0 || array2.length === 0)) {
    boardReset();
    console.log(winnerStatement);
   }
};




// console.log(moveDisk(0,1));





