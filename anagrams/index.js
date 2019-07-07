// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    let result = true
    const trackStringA = {}
    const trackStringB = {}
    stringA = stringA.replace(/[^\w]/g, '').toLowerCase().split('')
    stringB = stringB.replace(/[^\w]/g, '').toLowerCase().split('')
    const { maxKeys, minKeys } = Object.keys(trackStringA).length > Object.keys(trackStringB).length 
        ? { maxKeys: trackStringA, minKeys: trackStringB }
        : { maxKeys: trackStringB, minKeys: trackStringA }
    for (let i = 0; i < stringA.length; i++) {
        if (trackStringA[stringA[i]]) {
            trackStringA[stringA[i]]++
        } else {
            trackStringA[stringA[i]] = 1
        }
    }
    for (let i = 0; i < stringB.length; i++) {
        if (trackStringB[stringB[i]]) {
            trackStringB[stringB[i]]++
        } else {
            trackStringB[stringB[i]] = 1
        }
    }
    for (let key in maxKeys) {
        result = result && maxKeys[key] === minKeys[key]
    }
    return result
}

module.exports = anagrams;
