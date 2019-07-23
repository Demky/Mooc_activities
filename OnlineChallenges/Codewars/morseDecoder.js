var MORSE_CODE = { // Morse alphabet
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  "/": " ",
  "-·-·--": "!",
  "·-·-·-": ".",
  "--··--": ","
};

decodeMorse = function (morseCode) {
  let cleanedMorseCode = morseCode.trim()
  let translation = ""
  let words = cleanedMorseCode.split("   ")
  for (i in words) {
    let charaters = words[i].split(" ")
    for (c in charaters) {
      translation += MORSE_CODE[String(charaters[c])]
    }
    if (i < words.length-1) {
      translation += " "
    }
  }
  return translation.toUpperCase();
}

// TEST :
console.log("*" + decodeMorse('... ---   . .-   --- ...') + "*")
console.log(decodeMorse('-.... . -.--   .--- ..- -.. .')) // 'HEY JUDE'

/* myDoc :
# String() : Convert anything to a string.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

# .trim()
DOC : https://www.w3schools.com/jsref/jsref_trim_string.asp
> Remove whitespace from both sides of a string:
*/

// 2019/04/07