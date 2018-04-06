/*
Question 2 -- stringReformatting(string): The string s contains dashes that split it into groups of characters.
You are given an integer k that represents the number of characters in groups that your output should have. 
Your goal is to return a new string that breaks s into groups with a length of k by placing dashes at the correct intervals.
If necessary, the first group of characters can be shorter than k. It is guaranteed that there are no consecutive dashes in s. 
For s = "2-4a0r7-4k" and k = 4, the output should be stringReformatting(s, k) = "24a0-r74k"; 
The input string "2-4a0r7-4k" is split into three groups with lengths of 1, 5 and 2. Since k = 4, you need to split the string into two groups of 4 characters each,
making the output string "24a0-r74k". 
For s = "2-4a0r7-4k" and k = 3, the output should be stringReformatting(s, k) = "24-a0r-74k". 
Given the same input string and k = 3, split the string into groups of 2, 3, and 3 characters to get the output string of "24-a0r-74k".
*/
function stringReformatting(str, dash) {
  const formatedStr = str.split('-').join('').split('').reverse().join('');
  console.log(formatedStr, 'ff');
  let output = '';
  for (let i = 0; i < formatedStr.length; i++) {
    if (i % dash === 0 && i !== 0) {
      output += '-';
    }
    output += formatedStr[i];
  }
  return output.split('').reverse().join('');
}

const s = '2-4a0r7-4k';
const s2 = '2-4a0r7-4'; // 24-a0r-74k

stringReformatting(s, 4);
