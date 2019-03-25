function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}

/* myDoc : 
`g` tells to find all matches, not just the first.
`i` tells to be case insensitive.

What goes inside the `//` is the pattern.
`[]` tells to match any character in a set.

`aeiou` are the characters in the set. 
*/

// 2019/03/2