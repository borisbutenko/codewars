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
    if (sum !== 45) return false
  }
  return true
}
