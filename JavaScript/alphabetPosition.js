function alphabetPosition(text) {
  let newText = "";
  for (let letter of text) {
    const letterCode = letter.toUpperCase().charCodeAt(letter);
    if (letterCode > 64 && letterCode < 91) {
      newText += (letterCode - 64) + " "
    } 
      }
  return newText.trim()
}    

/* RESUME : 
# charCodeAt
DOC : https://www.w3schools.com/jsref/jsref_charcodeat.asp
> return the Unicode of the first character in a string
    Upercase alphabet latin code [65 ; 90]
    Lowercase alphabet latin code [97 ; 122]
DOC UTC CODE : https://www.w3schools.com/charsets/ref_utf_basic_latin.asp

# .trim()
DOC : https://www.w3schools.com/jsref/jsref_trim_string.asp
> Remove whitespace from both sides of a string:
*/