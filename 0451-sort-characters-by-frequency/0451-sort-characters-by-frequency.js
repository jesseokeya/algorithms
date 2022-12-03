/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
  // create a map to store the character counts
    let countMap = {};
    
    // loop through the characters in the string and increment the count in the map
    for (let ch of s) {
        if (!countMap[ch]) {
            countMap[ch] = 1;
        } else {
            countMap[ch] += 1;
        }
    }
    
    // sort the characters in the map by count, in decreasing order
    let sortedChars = Object.keys(countMap).sort((a, b) => countMap[b] - countMap[a]);
    
    // create a new string with the sorted characters
    let sortedString = "";
    for (let ch of sortedChars) {
        sortedString += ch.repeat(countMap[ch]);
    }
    
    return sortedString;
};

// const createMappings = (word) => {
//     const mappings = {}
    
//     for (const char of word) {
//        mappings[char] = mappings[char] + 1 || 1
//     }
    
//     return mappings
// }