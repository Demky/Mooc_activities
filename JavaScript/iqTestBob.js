function iqTest(numbers) {
  numbers = numbers.split(' ')
  let evenNumber = [];
  let oddNumber = [];
  for (let i in numbers) {
    if (numbers[i] % 2 == 0) {
      evenNumber.push(numbers[i])
    } else {
      oddNumber.push(numbers[i])
    }
    if (evenNumber.length < oddNumber.length) {
      result = evenNumber.join('')
    } else {
      result = oddNumber.join('')
    }
  }
  return (numbers.indexOf(result) + 1)
}

/* RESUME : 
# .indexOf()
> returns the first index at which a given element can be found in the array, -1 if it is not present.
*/
// 2019/03/22