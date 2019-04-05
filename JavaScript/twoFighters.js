function Fighter(name, health, damagePerAttack) {
  this.name = name;
  this.health = health;
  this.damagePerAttack = damagePerAttack;
  this.toString = function () { return this.name; }
}

// Debut exercice :
function declareWinner(fighter1, fighter2, firstAttacker) {
  let firstToAttack = fighter1.name === firstAttacker ? fighter1 : fighter2;
  let secondToAttack = fighter1.name !== firstAttacker ? fighter1 : fighter2;

  while ((firstToAttack.health > 0) && (secondToAttack.health > 0)) {
    if (firstToAttack.health > 0) {
      secondToAttack.health -= firstToAttack.damagePerAttack
    }
    if (secondToAttack.health > 0) {
      firstToAttack.health -= secondToAttack.damagePerAttack
    }
  }
  let winner = firstToAttack.health > secondToAttack.health ? firstToAttack : secondToAttack;
  return winner.name;
}

// TEST :

console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew"));
// console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry")));
// console.log(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harry")));
// console.log(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harald")));
// console.log(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Jerry")));
// console.log(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Harald")));

// 2019/04/05