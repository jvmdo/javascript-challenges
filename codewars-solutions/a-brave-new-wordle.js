function wordle(guess, answer) {
  guess = guess.toLowerCase().split("");
  answer = answer.toLowerCase().split("");

  // Step 1: green matching
  for (let i = 0; i < 5; i++) {
    if (guess[i] === answer[i]) {
      guess[i] = "G";
      answer[i] = "-";
    }
  }

  // Step 2: yellow matching
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (guess[j] === answer[i]) {
        guess[j] = "Y";
        answer[i] = "-";
      }
    }
  }

  // Step 3: black out
  for (let i = 0; i < 5; i++) {
    if (!["G", "Y"].includes(guess[i])) {
      guess[i] = "B";
    }
  }

  return guess.join("").toLowerCase();
}
