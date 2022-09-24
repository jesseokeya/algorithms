/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length === 0 || nums.length === null) return 0
    const set = new Set(nums)
    let max = 0
    
    for (const num of set) {
        if (set.has(num - 1)) continue
        let currNum = num, currCount = 1
        while (set.has(currNum + 1)) {
            currNum++
            currCount++
        }
        max = Math.max(max, currCount)
    }
    
    return max
};