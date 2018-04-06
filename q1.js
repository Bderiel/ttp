/*
Question 1 -- sumOfTwo(a,b,v): You have two integer arrays, a and b, and an integer target value v.
Determine whether there is a pair of numbers, where one number is taken from a and the other from b, that can be added together to get a sum of v.
Return true if such a pair exists, otherwise return false.
*/

function sumOfTwo(arr1, arr2, target) {
  const set2 = new Set(arr2); // makes array2 into a set for o(1) lookup
  for (let i = 0; i < arr1.length; i++) {
    let valueToFind = target - arr1[i];
    if (set2.has((valueToFind))) {
      return true;
    }
  }
  return false;
}
const a = [1, 2, 3, 4, 5];
const b = [1, 2, 3, 4, 5];


sumOfTwo(a, b, 7);