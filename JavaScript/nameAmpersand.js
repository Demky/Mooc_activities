function list(names) {
  let result = ""
  for (let i in names) {
    result += names[i].name
    if (i < names.length - 2) {
      result += ", "
    }
    else if (i < names.length - 1) {
      result += " & "
    }
  }
  return result
}

// TEST :
// console.log(list([{name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}]))
// console.log(list([{name: 'Bart'},{name: 'Lisa'}]))
// console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]))
// console.log(list([{name: 'Bart'}]))
// console.log(list([]))

// 2019/03/24