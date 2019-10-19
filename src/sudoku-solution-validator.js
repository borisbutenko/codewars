// --- https://www.codewars.com/kata/529bf0e9bdf7657179000008

function sudokuSolutionValidator (board) {
  for (let i = 0; i < 9; i += 3) {
    let sum = [0, 1, 2].reduce((sum, num) => {
      let j = i
      while (j < i + 3) {
        sum += board[i + num][j++]
      }
      return sum
    }, 0)
    if (sum !== 40 && sum !== 45) return false
  }
  return true
}

// --- https://www.codewars.com/kata/did-i-finish-my-sudoku

function doneOrNot (board) {
  for (let i = 0; i < 9; i += 1) {
    let line = board[i]
    if (new Set(line).size < 9) return 'Try again!'
    let set = new Set()
    for (let j = 0; j < 9; j += 1) {
      set.add(board[j][i])
    }
    if (set.size < 9) return 'Try again!'
  }
  return (sudokuSolutionValidator(board))
    ? 'Finished!'
    : 'Try again!'
}
