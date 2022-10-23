function doneOrNot(board) {
  function hasDuplicates(numbers) {
    return !numbers.every((n) => n === 1);
  }

  //   Test for each block
  const lines = [6, 6, 6, 3, 3, 3, 0, 0, 0];
  const cols = [6, 3, 0, 6, 3, 0, 6, 3, 0];

  for (let b = 0; b < board.length; b++) {
    const numbers = Array(9).fill(0);
    const q = lines.pop();
    const r = cols.pop();

    for (let i = q; i < q + 3; i++) {
      for (let j = r; j < r + 3; j++) {
        const pos = board[i][j];
        numbers[pos - 1]++;
      }
    }

    if (hasDuplicates(numbers)) {
      return "Try again!";
    }
  }

  for (let i = 0; i < board.length; i++) {
    const numbers = Array(9).fill(0);

    //     Test for each line
    for (let j = 0; j < board[i].length; j++) {
      const pos = board[i][j];
      numbers[pos - 1]++;
    }

    if (hasDuplicates(numbers, 9)) {
      return "Try again!";
    }

    numbers.fill(0);

    //     Test for each column
    for (let j = 0; j < board[i].length; j++) {
      const pos = board[j][i];
      numbers[pos - 1]++;
    }

    if (hasDuplicates(numbers)) {
      return "Try again!";
    }
  }

  return "Finished!";
}
