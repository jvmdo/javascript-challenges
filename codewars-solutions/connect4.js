class Connect4 {
  #board = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ];

  #round = 0;
  #player = 0;

  play(col) {
    this.#player = (this.#round % 2) + 1;

    if (this.#isGameOver()) {
      return "Game has finished!";
    }

    const successMove = this.#placeDisc(col);

    if (!successMove) {
      return "Column full!";
    }

    if (this.#isConnected()) {
      return `Player ${this.#player} wins!`;
    }

    this.#round++;

    return `Player ${this.#player} has a turn`;
  }

  #placeDisc(col) {
    for (let row = 0; row < this.#board.length; row++) {
      if (this.#board[row][col] === 0) {
        this.#board[row][col] = this.#player;
        console.log(this.#board);
        return true;
      }
    }
    return false;
  }

  #isConnected() {
    const rows = this.#board.length;
    const cols = this.#board[0].length;

    // Vectors for moving leveraging simple arithmetics
    const directions = [
      [0, 1], // →
      [1, 0], // ↓
      [1, 1], // ↘
      [1, -1], // ↙
    ];

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        // Care only for filled cells by the current player
        if (this.#board[row][col] !== this.#player) continue;

        for (const [dirRow, dirCol] of directions) {
          let count = 1;

          // Suppose each iteration you walk to the next "layer"
          for (let layer = 1; layer < 4; layer++) {
            const nextRow = row + dirRow * layer;
            const nextCol = col + dirCol * layer;

            // Is out of board or cell is not target value?
            if (
              nextRow < 0 ||
              nextRow >= rows ||
              nextCol < 0 ||
              nextCol >= cols ||
              this.#board[nextRow][nextCol] !== this.#player
            ) {
              break;
            }

            count++;
          }

          if (count === 4) return true;
        }
      }
    }

    return false;
  }

  #isGameOver() {
    return this.#isConnected(1) || this.#isConnected(2);
  }
}

const connect4 = new Connect4();
let output = connect4.play(0);
output = connect4.play(1);
output = connect4.play(0);
output = connect4.play(1);
output = connect4.play(3);
output = connect4.play(1);
output = connect4.play(0);
output = connect4.play(1);

console.log(output);
