/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    if (flowerbed.length === 1 && n === 1 && flowerbed[0] === 0) return true
    for (let i = 0; i < flowerbed.length; i++) {
        const curr = flowerbed[i], prev = flowerbed[i - 1], next = flowerbed[i + 1]
        if (curr === 0 && prev === 0 && next === 0) {
            flowerbed[i] = 1
            n--
            continue
        }
        if (!prev && next === 0 && curr === 0) {
            flowerbed[i] = 1
            n--
            continue
        }
        if (!next && prev === 0 && curr === 0) {
            flowerbed[i] = 1
            n--
            continue
        }
    }
    return n <= 0
};
