//* My solution
function rockPaperScissors(play1, play2) {
  const beatMap = new Map([
    ["rock", "scissors"],
    ["scissors", "paper"],
    ["paper", "rock"],
  ]);

  return beatMap.get(play1) === play2
    ? "Player 1 won!"
    : beatMap.get(play2) === play1
    ? "Player 2 won!"
    : "Draw!";
}

//* Clever solution [not mine]
/* const rps = (p1, p2) => {
  if (p1 === p2) {
    return 'Draw!'
  }; 
  return `Player ${/rockscissors|scissorspaper|paperrock/.test(p1+p2) ? 1 : 2} won!`;
} */

const output = rockPaperScissors("rock", "paper");
console.log(output);
