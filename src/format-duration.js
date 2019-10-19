// https://www.codewars.com/kata/human-readable-duration-format

function pluralize (val, text) {
  text = `${val} ${text}`
  return (val === 1) ? text : `${text}s`
}

function getMsg (y, d, h, m, s) {
  let data = [
    { label: 'year', val: y },
    { label: 'day', val: d },
    { label: 'hour', val: h },
    { label: 'minute', val: m },
    { label: 'second', val: s }
  ]
  data = data.filter(({ val }) => Boolean(val))
  return data.reduce((result, { label, val }, i) => {
    if (i === 0) return result
    if (data.length > 2 && i < data.length) {
      result = result.replace(/ and/g, ',')
    }
    result += ` and ${pluralize(val, label)}`
    return result
  }, pluralize(data[0].val, data[0].label))
}

function formatDuration (seconds) {
  if (!seconds) return 'now'

  let d = new Date(null)
  let hasYears = (seconds / 60 / 60 / 24 >= 365)
  let hasDays = (seconds / 60 / 60 / 24 >= 1)
  let hasHours = (seconds / 60 / 60 >= 1)
  let hasMinutes = (seconds / 60 >= 1)

  d.setTime(d.getTimezoneOffset() * 60 * 1000)
  d.setSeconds(seconds)

  let [h, m, s] = [d.getHours(), d.getMinutes(), d.getSeconds()]
  if (hasYears) {
    let years = Math.floor(seconds / 60 / 60 / 24 / 365)
    let days = Math.floor(seconds / 60 / 60 / 24 - 365 * years)
    return getMsg(years, days, h, m, s)
  }
  if (hasDays) {
    let days = Math.floor(seconds / 60 / 60 / 24)
    return getMsg(null, days, h, m, s)
  }
  if (hasHours) {
    return getMsg(null, null, h, m, s)
  }
  if (hasMinutes) {
    return getMsg(null, null, null, m, s)
  }
  return getMsg(null, null, null, null, s)
}
