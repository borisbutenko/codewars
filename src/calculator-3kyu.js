class Calculator {
  evaluate (str) {
    let arr = str
      .split('+')
      .map(s => (~s.indexOf('-')) ? s.split('-') : s)

    let plus = arr.filter(s => !Array.isArray(s))
    let minus = arr.filter(Array.isArray).reduce(Array.prototype.concat)

    let result = 0

    // for (let i = 0, l = plus.length; i < l; i += 1) {
    //   let item = plus[i]
    //   let sum = item.trim().split(' ').reduce((out, next, i, arr) => {
    //     if (!isNaN(Number(next))) return out
    //     return out + Calculator.calculate(arr[i - 1], arr[i + 1], next)
    //   }, 0)
    //   result += sum
    // }

    console.log(minus)
    for (let i = 0, l = minus.length; i < l; i += 1) {
      let item = minus[i]
      let arr = item.trim().split(' ')
      let sum = (arr.length === 1)
        ? Number(arr[0])
        : arr.reduce((out, next, i, arr) => {
          if (!isNaN(Number(next))) return out
          return out + Calculator.calculate(arr[i - 1], arr[i + 1], next)
        }, 0)
      console.log(sum)
      result += sum
    }

    console.log(result)

    return

    str = str.split('+')

    if (str.length === 1 && /^\d+$/.test(str[0])) {
      return Number(str[0])
    }

    str = str.map(s => (~s.indexOf('-')) ? s.split('-') : s)

    for (let i = 0, l = str.length; i < l; i += 1) {
      let ch = str[i]
      if (Array.isArray(ch)) {
        let arr = str[i]
        for (let j = 0, len = arr.length; j < len; j += 1) {
          let ch2 = arr[j]
          arr[j] = (ch2.length === 1)
            ? Number(ch2)
            : ch2.split('').reduce((out, next, i, arr) => {
              if (!isNaN(Number(next))) return out
              return out + Calculator.calculate(arr[i - 1], arr[i + 1], next)
            }, 0)
        }
        str[i] = str[i].reduce((sum, val) => sum - val)
      }
      else {
        str[i] = (ch.length === 1)
          ? Number(ch)
          : ch.split(' ').reduce((out, next, i, arr) => {
            if (!isNaN(Number(next))) return out
            return Calculator.calculate(out || arr[i - 1], arr[i + 1], next)
          }, 0)
      }
    }

    return str.reduce((sum, val) => sum + val)
  }

  static calculate (a, b, exp) {
    a = Number(a)
    b = Number(b)
    switch (exp) {
      case '+': return a + b
      case '-': return a - b
      case '*': return a * b
      case '/': return a / b
      default: return 0
    }
  }
}

console.log(
  new Calculator().evaluate('10 / 2 + 3 - 2 * 5'),
  eval('10 / 2 + 3 - 2 * 5')
)
