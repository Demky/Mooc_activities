function digital_root(number) {
  let numberOfDigit = number.toString().length
  while (numberOfDigit > 0) {
    number = addition(number)
    numberOfDigit--
  }
  return number
}

function addition(number) {
  let digitToArray = number.toString().split('')
  sum = 0
  for (let digit in digitToArray) {
    sum += parseInt(digitToArray[digit])
  }
  return sum
}

// TEST
console.log(digital_root(1321891))
console.log(digital_root(16))
console.log(digital_root(456))

/* myDoc : 
  number.toString().length : return the length but the 'real' javascriptesk way to return length of a number(non negative integer) 'should/could' be with pure Math:

  let len = Math.ceil(Math.log(number + 1) / Math.LN10);

# Math.ceil() :  returns the smallest integer greater than or equal to a given number

# Math.log() : returns the natural logarithm (base e) of a number

# Math.LN10 : represents the natural logarithm of 10 : approximately 2.302
*/

// 2019/03/25