let size = 8;

let chessBoard = "";

for (let yAxis = 0; yAxis < size; yAxis++) {
  for (let xAxis = 0; xAxis < size; xAxis++) {
    if ((xAxis + yAxis) % 2 === 0) {
      chessBoard += " ";
    } else {
      chessBoard += "#";
    }
  }
  chessBoard += "\n";
}

console.log(chessBoard);
