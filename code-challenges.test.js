// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

// Test 1:

describe('removeShuffle', () => {
  it('removes the first item from the array and shuffles the remaining content', () => {
    expect(removeShuffle(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
    expect(removeShuffle(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
  })
})

// *** Good Test Failure *** //
// FAIL  ./code-challenges.test.js
// removeAndShuffle
//   ✕ removes the first item from the array and shuffles the remaining content (2 ms)

// ● removeAndShuffle › removes the first item from the array and shuffles the remaining content

//   ReferenceError: removeAndShuffle is not defined

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = [
  "chartreuse",
  "indigo",
  "periwinkle",
  "ochre",
  "aquamarine",
  "saffron"
]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// b) Create the function that makes the test pass.

// Solution 1:

// PSUEDOCODE
// Function Signature
// input: array of strings
// ouput: array of strings without first element of original array and shuffled

// input: const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// output: ["yellow", "blue", "pink", "green"] *** can be different in order ***

// input: const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// output: ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"] *** can be in different order ***

// Process: create a function called removeShuffle that takes in an array of strings as its parameter and returns an array with first element removed from original array and shuffled
// Side note: Used the Fisher-Yates shuffle algorithm to create a more random shuffle of sequences
  // https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
// Inside the function:
  // Use shift method to remove first element in array
  // declare a variable with 0
  // Use the map method to iterate the array
    // use parameters: undescore, index (only need to use the index in this HOF)
    // used variable to hold a random number using Math Floor & Random * index + 1
    // Swap variables with original index with random 
  // return array

const removeShuffle = (array) => {
  array.shift()
  let j = 0
  
  array.map((_,index) => {
    j = Math.floor(Math.random() * (index + 1))
    let tempVal = array[index]
    array[index] = array[j]
    array[j] = tempVal
  })

  return array
}

// *** Test Passed *** //
// PASS  ./code-challenges.test.js
// removeShuffle
//   ✓ removes the first item from the array and shuffles the remaining content (3 ms)

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

// Test 2:

describe('voteTally', () => {
  it('returns the end tally', () => {
    expect(voteTally(votes1)).toEqual(11)
    expect(voteTally(votes2)).toEqual(-31)
  })
})

// *** Good Test Failure *** //
// FAIL  ./code-challenges.test.js
// voteTally
// ✕ returns the end tally (1 ms)

// ● voteTally › returns the end tally

// ReferenceError: voteTally is not defined

const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

// b) Create the function that makes the test pass.

// Solution 2:

// PSUEDOCODE
// Function signature
// input: object
// output: number (integer)

// input: const votes1 = { upVotes: 13, downVotes: 2 }
// output: 11

// input: const votes2 = { upVotes: 2, downVotes: 33 }
// output: -31

// Process: Create a one line function that takes in an object and returns a number (integer)
// Parameter: will deconstruct object to the two object values
// will return upVotes - downVotes tally

const voteTally = ({upVotes, downVotes}) => upVotes - downVotes

// *** Test Passed *** //
// PASS  ./code-challenges.test.js
// ✓ returns the end tally (1 ms)

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe('removeDuplicates', () => {
  it('returns one array with no duplicate values', () => {
    expect(removeDuplicates(dataArray1,dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
  })
})

// *** Good Test Failure *** //
// FAIL  ./code-challenges.test.js
// removeDuplicates
// ✕ returns one array with no duplicate values (2 ms)

// ● removeDuplicates › returns one array with no duplicate values

// ReferenceError: removeDuplicates is not defined

const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

// b) Create the function that makes the test pass.


// PSUEDOCODE:
// Function Signature
// input: two arrays of strings
// output: array of strings with no duplicates

// input: const dataArray1 = ["array", "object", "number", "string", "Boolean"]
// input: const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// outpu: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

// Process: create a function called removeDuplicates that can take in multiple arrays
// Parameter: spread operator named array
// Create an empty array
// Sidenote: using spread operator as a parameter creates a multi-dimensional array
// First for loop will iterate each array within the multi-dimensional array
// Second loop will iterate each element within the array of each array within the multi-dimensional array
// will push array into empty array
// will return a unique array using the Set method


const removeDuplicates = (...array) => {
  let newArr = []

  for(i = 0; i <= array.length - 1; i++) {
  
    for(let j = 0; j <= array[i].length - 1; j++) {
      temp2 = array[i][j]
      newArr.push(temp2)
    }
  }
  return [...new Set(newArr)]
}

// *** Test Passed *** //
// PASS  ./code-challenges.test.js
// removeDuplicates
// ✓ returns one array with no duplicate values (1 ms)
