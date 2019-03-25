// Solution 1
function duplicateEncode(word) {
  result = '';
  for (let i = 0; i < word.length ; i++) {
    let fixedLetter = escapeRegExp(word[i]);
    let letterToRegEx = new RegExp( fixedLetter, 'ig'); // transform letter to equivalent regex 'a' -> '/a/gi' ; '?' -> '/\?/gi'
    console.log(letterToRegEx)
    // if letter is duplicate (>1) it append ) to result, else append (
    result += word.match(letterToRegEx).length > 1 ? ')' : '(';
  }
  return result;
}

function escapeRegExp(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'); // add an escape before special characters '?' -> '\?' ;  '$&' means the whole matched string
}

/* myDoc : 
# .match() : Retrieves the result of matching a string against a regular expression
# new RegExp() : new RegExp(pattern[, flags]) ; creates a regular expression object for matching text with a pattern.
*/

// TEST :
// console.log(duplicateEncode("aba?"))
// console.log(duplicateEncode("din"))
// console.log(duplicateEncode("recede"))
// console.log(duplicateEncode("Success"))
// console.log(duplicateEncode("(( @"))


// Solution 2 - not my reflexion but I would like to remember it : TODO: add special character support if you want to use it for this exercise
function duplicateEncode2(word) {
  let res = [...word].map(letter =>
    word.match(new RegExp(letter, "ig")).length === 1 ? "(" : ")"
  ).join("");

  return res
}

// TEST :
// console.log(duplicateEncode2("din"))
// console.log(duplicateEncode2("recede"))
// console.log(duplicateEncode2("Success"))
// // console.log(duplicateEncode2("(( @"))

/* myDoc :  TODO: I will complete this doc
[...word] :
.map() : 
*/

// 2019/03/25