/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let result = 0
    
    if (nums.length === 0 || nums === null) return 0
    const set = new Set(nums)
    
    for (const num of set) {
        if (set.has(num - 1)) continue
        
        let currentNum = num, count = 1
        while (set.has(currentNum + 1)) {
            currentNum++
            count++
        }
        
        result = Math.max(count, result)
    }
    
    return result
};