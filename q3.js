/* 
Question 3 -- getClosingParen(sentence, openingParenIndex): 
"Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing." 
Write a function that, given a sentence like the one above, along with the position of an opening parenthesis, finds the corresponding closing parenthesis. 
Example: if the example string above is input with the number 10 (position of the first parenthesis), the output should be 79 (position of the last parenthesis)
*/


function getClosingParen(sentence, openingParenIndex) {
  let count = 1;
  for (let i = openingParenIndex + 1; i < sentence.length; i++) {
    let cur = sentence[i];
    if (cur === '(') {
      count++;
    }
    if (cur === ')') {
      count--;
      if (count < 1) return i;
    }
  }
  return false; // doesnt close
}

const sen =
  'Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.';

getClosingParen(sen, 10);