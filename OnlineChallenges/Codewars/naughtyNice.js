function getNiceNames(people) {
  let niceName = []
  people.forEach(person => {
    if (person.wasNice == true) {
      niceName.push(person.name)
    }
  })
  return niceName
}

function getNaughtyNames(people) {
  let naughtyName = []
  people.forEach(person => {
    if (person.wasNice == false) {
      naughtyName.push(person.name)
    }
  })
  return naughtyName
}

// 2019/03/24