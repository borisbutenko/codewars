// https://www.codewars.com/kata/5235c913397cbf2508000048

class Calculator {
  constructor () {
    this.expressions = ['*/', '-', '+']
  }

  evaluate (str) {
    let arr = str.split(' ')
    for (let i = 0, expL = this.expressions.length; i < expL; i += 1) {
      let exp = this.expressions[i]
      for (let j = 0, arrL = arr.length; j < arrL; j += 1) {
        let iof = exp.indexOf(arr[j])
        if (~iof) {
          let [a, b] = [arr[j - 1], arr[j + 1]]
          arr.splice(j - 1, 3, this.calculate(a, b, exp[iof]));
          [j, arrL] = [0, arr.length]
        }
      }
    }
    return arr.pop()
  }

  calculate (a, b, exp) {
    [a, b] = [Number(a), Number(b)]
    switch (exp) {
      case '*': return a * b
      case '/': return a / b
      case '+': return a + b
      case '-': return a - b
    }
  }
}
