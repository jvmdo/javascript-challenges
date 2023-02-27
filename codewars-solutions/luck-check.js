function luckCheck(ticket) {
  if (!/^\d+$/.test(ticket)) throw new Error("Invalid input");

  const halfLength = Math.floor(ticket.length / 2);
  const isLengthOdd = ticket.length > 1 && ticket.length % 2;
  const sum = ticket.split("").reduce(
    (sum, digit, i) => {
      if (i < halfLength) sum.left += +digit;
      else if (!(isLengthOdd && i === halfLength)) sum.right += +digit;
      return sum;
    },
    { left: 0, right: 0 }
  );

  return sum.left === sum.right;
}

const output = luckCheck("6F43E8");
output;
