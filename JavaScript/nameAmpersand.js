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

// TEST (replace return by console.log()):
// list([{name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}])
// list([{name: 'Bart'},{name: 'Lisa'}])
// list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}])
// list([{name: 'Bart'}])
// list([])

// 2019/03/24