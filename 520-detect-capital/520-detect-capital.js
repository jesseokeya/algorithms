/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    const upperCase = word.toUpperCase()
    const lowerCase = word.toLowerCase()
    const titleCase = word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()
    return word === upperCase || word === lowerCase || word === titleCase
};