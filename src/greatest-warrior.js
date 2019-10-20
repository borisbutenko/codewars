class Warrior {
  constructor () {
    this._level = 1
    this._experience = 100
    this._rank = Warrior.ranks[0]
    this._achievements = []
    this._maxXP = 10000
  }

  updateStats (exp) {
    if (this._experience > this._maxXP) {
      return
    }
    let updatedXP = (exp + this._experience)
    this._experience = (updatedXP > this._maxXP) ? this._maxXP : updatedXP
    this._level = parseInt(this._experience / 100, 10)
    this._rank = Warrior.getRank(this._level)
  }

  training ([enemyName, exp, minLvl]) {
    if (minLvl > this._level) {
      return 'Not strong enough'
    }
    this.updateStats(exp)
    this._achievements.push(enemyName)
    return enemyName
  }

  battle (enemyLvl) {
    if (enemyLvl < 1 || enemyLvl > 100) {
      return 'Invalid level'
    }
    if (enemyLvl - this._level >= 5 && this._rank !== Warrior.getRank(enemyLvl)) {
      return 'You\'ve been defeated'
    }
    let msg = this.getBattleMsg(enemyLvl)
    this.calculateXP(enemyLvl)
    return msg
  }

  calculateXP (lvl) {
    let diff = (lvl - this._level)
    if (diff <= -2) return
    switch (diff) {
      case -1:
        this.updateStats(5)
        break
      case 0:
        this.updateStats(10)
        break
      default:
        this.updateStats(20 * diff * diff)
        break
    }
  }

  getBattleMsg (lvl) {
    return (this._level < lvl)
      ? 'An intense fight'
      : (this._level - lvl <= 1)
        ? 'A good fight'
        : 'Easy fight'
  }

  level () { return this._level }
  experience () { return this._experience }
  achievements () { return this._achievements }
  rank () { return this._rank }

  static getRank (lvl) {
    let i = parseInt(lvl / 10, 10)
    return Warrior.ranks[i]
  }

  static get ranks () {
    return [
      'Pushover',
      'Novice',
      'Fighter',
      'Warrior',
      'Veteran',
      'Sage',
      'Elite',
      'Conqueror',
      'Champion',
      'Master',
      'Greatest'
    ]
  }
}
