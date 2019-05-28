function wave(string){
  let finalString, beginingString, endingString;
  let result = []
  for (let i = 0; i < string.length; i++) {
    if (string[i] != " ") {
      beginingString = string.substring(0, string.indexOf(string[i], i)); // Find the first occurrence of the letter *string[i]* in a string, starting the search at position of *i*
      endingString = string.substring(i+1);
      finalString = beginingString + string[i].toUpperCase() + endingString;
      result.push(finalString);
    }
  }
  return(result)
}

// TEST :
// console.log(wave("hello"))
// console.log(wave("codewars"))
// console.log(wave(""))
// console.log(wave("two words"))
// console.log(wave(" gap "))

/* myDoc : 
# .substring() : returns the part of the string between the start and end indexes, or to the end of the string.
_str_.substring(indexStart[, indexEnd]) ; indexEnd is optional
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
*/

// 2019/04/04