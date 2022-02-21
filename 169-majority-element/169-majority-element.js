/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const freq = nums.length / 2, hmap = new Map()
    for (const num of nums) {
        if (!hmap.has(num)) hmap.set(num, 1)
        else hmap.set(num, hmap.get(num) + 1)
    }
    
    for (const [k, v] of hmap) {
        if (v > freq) return k
    }
    
    return -1
};