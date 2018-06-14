// Question 1 -- sortByStrings(s,t): Sort the letters in the string s by the order they occur in the string t. You can assume t will not have repetitive characters. For s = "weather" and t = "therapyw", the output should be sortByString(s, t) = "theeraw". For s = "good" and t = "odg", the output should be sortByString(s, t) = "oodg".

/*****************/

//Approach: Make a hash map for string t, mapping char to index
//Do a merge sort on string s using hash table values to compare the chars
//time complexity: O(n*log(n)), space complexity O(n + m) where n is length of s and m is length of t
//we could use quick sort instead if we wanted to use less space, although technically worst case time complexity would be O(n2)

const sortByStrings = (s, t) => {
  const hashMap = {}
  for (let i = 0; i < t.length; i++) {
    hashMap[t[i]] = i
  }
  return mergeSortByMap(s.split(''), hashMap).join('')
}

const mergeSortByMap = (array, map, low = 0, high = array.length - 1) => {
  if (low === high) return [array[low]]
  const mid = Math.floor((low + high) / 2)
  return merge(mergeSortByMap(array, map, low, mid), mergeSortByMap(array, map, mid + 1, high), map)
}

const merge = (left, right, hashMap) => {
  let leftIndex = 0
  let leftChar = left[leftIndex]
  let rightIndex = 0
  let rightChar = right[rightIndex]
  const result = []
  while (leftIndex < left.length || rightIndex < right.length) {
    //take the left if the right doesnt exist or the left is less than right
    if (leftIndex < left.length && (!rightChar || hashMap[leftChar] < hashMap[rightChar])) {
      result.push(leftChar)
      leftIndex++
      leftChar = left[leftIndex]
    } else {
      result.push(rightChar)
      rightIndex++
      rightChar = right[rightIndex]
    }
  }
  return result
}

console.log(sortByStrings('weather', 'therapyw')) //theeraw
console.log(sortByStrings('good', 'odg')) //oodg
