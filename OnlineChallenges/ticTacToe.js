function isSolved(board) {
  for (let i in board) {
    for (let j in board) {
      if (board[i][j] == 0) {
        // Board not complete
        console.log("there is a 0");
        return -1
      }
      console.log(board);
      console.log(board.length);
      console.log(i);
      console.log(j);
      checkRow(board, i, j)
      console.log(board[1][j]);
      console.log(board[i][j]);
    }
  }

  function checkRowRight(board, i, j) {
    let cpt = 0
    console.log(board[i][j]);
    console.log(board.length);
    console.log(i);
    console.log(j);
    if (i >= 0 || i < board.length - 1) {
      console.log(board[i][j]);
      console.log(i);
      // check = board[i][j] == board[i + 1][j + 1]

      // console.log(check)
    }
  }
}

/* 
    def verifLigneDroite(self, p, x, y, cmpt=1):
        # cmpt = 0
        if y < ( len(p[0] ) - 1) and p[x][y] == p[x][y + 1]:
            return self.verifLigneDroite(p, x, y + 1, cmpt + 1)
        else:
            return cmpt
*/


console.log(isSolved([
  [5, 3],
  [1, 2]]))

// console.log(isSolved([
//   [5, 3, 5],
//   [5, 5, 9],
//   [5, 5, 5]]))
// console.log(isSolved([
//   [00, 01, 02],
//   [10, 11, 12],
//   [20, 21, 22]]))

// console.log(isSolved([
//   [0, 0, 1],
//   [0, 1, 2],
//   [2, 1, 0]]))