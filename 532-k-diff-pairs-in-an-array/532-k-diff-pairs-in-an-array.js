/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    // return 0 when k is less than 0 since absolute difference is never negative
    if (k < 0) return 0
    
    // hmap to hold frequency of values
    const hmap = new Map()
    
    // iterate and create frequency count for all values
    for (const num of nums) {
        if (!hmap.has(num)) {
            hmap.set(num, 1)
        } else {
            hmap.set(num, hmap.get(num) + 1)
        }
    }
    
    let counter = 0
    
    // iterate through map keys if k == 0 and k >= 2 increment counter
    // since absolute diff of 2 similar numbers will equal to 0
    // If the key + k is in the map also increment counter as (key + k) - k
    // will equal the current key 
    for (const [key, value] of hmap) {
       if (k === 0) {
           if (value >= 2) counter++
       } else {
           if (hmap.has(key + k)) counter++
       }
    }
    
    return counter
};