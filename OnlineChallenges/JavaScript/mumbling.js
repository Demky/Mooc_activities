function accum(string) {
  newStringConcatened = ""
  for (i = 0; i < string.length; i++){
    stringElement = string[i].repeat(i+1)
    stringElementCapitalized = stringElement.charAt(0).toUpperCase() + stringElement.slice(1).toLowerCase()
    newStringConcatened += stringElementCapitalized
    if (i < string.length-1){
      newStringConcatened += "-"
    }
  }
  return newStringConcatened
}

// TEST : 
console.log(accum("abC"))
// console.log(accum("ZpglnRxqenU"))
// console.log(accum("NyffsGeyylB"))
// console.log(accum("MjtkuBovqrU"))
// console.log(accum("EvidjUnokmM"))
// console.log(accum("HbideVbxncC"))

/* myDoc : 
# .repeat() : constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
_str_.repeat(_count_)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat

# .charAt() : returns a new string consisting of the character located at the specified index (If no index is provided, the default is 0).
_str_.charAt(_index_)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt 

# .slice(x) : extracts a section of a string and returns it as a new string, without modifying the original string.
_str_.slice(_beginIndex_[, endIndex])  ; endIndex is optional
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
*/

// 2019/03/27