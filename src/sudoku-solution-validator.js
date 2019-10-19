// --- https://www.codewars.com/kata/529bf0e9bdf7657179000008

function sudokuSolutionValidator (board) {
  function getSum (i, j) {
    let [sum, end] = [0, (j + 3)]
    while (j < end) {
      sum += board[i][j++]
    }
    return sum
  }
  for (let i = 0; i < 9; i += 3) {
    let sum = [0, 1, 2].reduce((sum, num) => {
      sum += getSum(i + num, i)
      return sum
    }, 0)
    if (sum !== 45) return false
  }
  return true
}
