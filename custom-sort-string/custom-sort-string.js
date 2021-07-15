/**
 * @param {string} order
 * @param {string} str
 * @return {string}
 */
var customSortString = function(order, str) {
    const sortOrder = {}, splitStr = str.split('')
    for (let i = 0; i < order.length; i++) {
        const char = order.charAt(i)
        sortOrder[char] = i
    }
    
    let len = order.length
    const sorted = splitStr.sort((a, b) => {
        if (!sortOrder.hasOwnProperty(a)) {
            sortOrder[a] = len
            len++
        }
        if (!sortOrder.hasOwnProperty(b)) {
            sortOrder[b] = len
            len++
        }
        return sortOrder[a] - sortOrder[b]
    })
    return sorted.join('')
};