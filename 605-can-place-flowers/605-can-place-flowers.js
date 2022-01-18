/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let count = 0
    for (let i = 0; i < flowerbed.length; i++) {
        const curr = flowerbed[i], prev = flowerbed[i - 1], next = flowerbed[i + 1] 
        if (count < n && !curr && !prev && !next) {
            flowerbed[i] = 1
            count++
        }
    }
    console.log(flowerbed)
    console.log(count)
    return n === count
};