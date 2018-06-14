// Question 2 -- decodeString(s): Given an encoded string, return its corresponding decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times. Note: k is guaranteed to be a positive integer.

// For s = "4[ab]", the output should be decodeString(s) = "abababab"
// For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"

/************************/

//Approach - iterative: build a stack of the repeats and a stack of the substrings, then build the output by reducing the substring stack from the top and repeating by the top item on the repeat stack. Time complexity: O(n) where n is the length of s. Space complexity: O(n) for the stacks.

const decodeString = (s) => {
  const repeatStack = []
  const subStringStack = []
  let subString = ''
  //build repeatStack and subString stack
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '[') {
      continue
    } else if (s[i] === ']') {
      if (subString.length) subStringStack.push(subString)
      subString = ''
    } else if (isNaN(s[i])) {
      subString += s[i]
    } else { //it is a number
      repeatStack.push(s[i])
      if (subString.length) subStringStack.push(subString)
      subString = ''
    }
  }
  //reduce
  return subStringStack.reduceRight((prev, curr, i) => {
    return (curr + prev).repeat(repeatStack.pop())
  }, '')
}

console.log(decodeString('4[ab]'))
console.log(decodeString('2[b3[a]]'))
