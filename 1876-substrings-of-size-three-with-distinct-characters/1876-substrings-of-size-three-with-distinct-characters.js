/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    let windowStart = 0, strWindow = '', result = 0
    
    for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
        strWindow += s[windowEnd]
        
        if (windowEnd >= 2) {
            if (isUnique(strWindow)) result++
            strWindow = strWindow.substr(1, strWindow.length)
            windowStart++
        }
    
    }
    
    return result
};

const isUnique = (str) => {
    return new Set(str).size === str.length
}