/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    return compare(S) === compare(T)
};
​
const compare = (word) => {
    let index = word.indexOf('#')
    while (word.includes('#') && index > -1) {
        index = word.indexOf('#')
        word = word.substr(0, index-1) + word.slice(index+1)
    }
    return word
}
