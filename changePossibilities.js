// Question 3 -- changePossibilities(amount,denoms): Your quirky boss collects rare, old coins. They found out you're a programmer and asked you to solve something they've been wondering for a long time.

// Write a function that, given an amount of money and an array of coin denominations, computes the number of ways to make the amount of money with coins of the available denominations.

// Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), your program would output 4—the number of ways to make 4¢ with those denominations:

// 1¢, 1¢, 1¢, 1¢
// 1¢, 1¢, 2¢
// 1¢, 3¢
// 2¢, 2¢

//******************* */

//Approach: dynamic programming - use an array with length of the amount you want to check + 1. Build up ways to make change one denomination at a time starting with 0 and ending with the amount. Time complexity: O(n*m) where n is the amount and m is the number of denominations. Space complexity: O(n) where n is the amount.

const changePossibilities = (amount, denoms) => {
  if (amount === 0) return 1
  //Create an array of length 'amount' with 0 at each index
  const numOfWaysList = Array(amount + 1).fill(0)

  denoms.forEach(denom => {
    for (let i = 0; i < numOfWaysList.length; i++) {
      if (i === denom) {
        numOfWaysList[i]++
      } else if (i > denom) {
        numOfWaysList[i] += numOfWaysList[i - denom]
      }
    }
  })
  return numOfWaysList.pop()
}

console.log(changePossibilities(4, [1, 2, 3])) //=> 4
console.log(changePossibilities(7, [2, 4])) //=> 0
console.log(changePossibilities(12, [2, 3, 7, 20])) //=> 4
