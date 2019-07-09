const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const calculateWinner = (squares: string[]): string => {
  const winningLine = getWinningLine(squares);
  return winningLine
    ? squares[winningLine[0]]
    : null;
}

export const getWinningLine = (squares: string[]): number[] => {
  const winningLines = lines.filter(line => {
    const [a, b, c] = line;
    return squares[a] && squares[a] === squares[b] && squares[a] === squares[c];
  });
  return winningLines.length > 0
    ? winningLines[0]
    : null;
}