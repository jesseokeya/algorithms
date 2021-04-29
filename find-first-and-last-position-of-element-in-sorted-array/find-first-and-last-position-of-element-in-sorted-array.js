/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const hmap = new Map()
    for (let i = 0; i < nums.length; i++) {
        const value = nums[i]
        if (!hmap.has(value)) hmap.set(value, [i])
        else hmap.get(value).push(i)
    }
    const result = hmap.get(target)
    if (!result) return [-1, -1]
    
    const soln = [], first = result[0]
    if (result.length <= 1) return [first, first]
    return [result.shift(), result.pop()]
};