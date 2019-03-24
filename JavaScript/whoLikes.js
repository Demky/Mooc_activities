function likes(names) {
  switch (true) {
    case names.length == 0:
      return "no one likes this"
    case names.length == 1:
      return `${names[0]} likes this`
    case names.length == 2:
      return `${names[0]} and ${names[1]} like this`
    case names.length == 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
    case names.length > 3:
      others = names.length - 2
      return `${names[0]}, ${names[1]} and ${others} others like this`
    default:
      return "ERROR WITH INPUT"
  }
}

/* RESUME : 
Conditions in a Switch case :
"the only thing necessary is switch(true){...} and for your case expressions to evaluate to booleans.
It works because, the value we give to the switch is used as the basis to compare against. Consequently, the case expressions, 
also evaluating to booleans will determine which case is run."
*/

// 2019/03/22