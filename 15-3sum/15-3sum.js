/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const results = [], seen = new Set()
    nums = nums.sort((a, b) => a - b)
    
    for (let i = 0; i < nums.length; i++) {
        let left = i + 1, right = nums.length - 1
        
        while (left < right) {
            const sum = nums[left] + nums[i] + nums[right]
            if (sum > 0) right--
            else if (sum < 0) left++
            else {
                const key = `${nums[left]}#${nums[i]}${nums[right]}`
                if (!seen.has(key)) {
                    results.push([nums[left], nums[i], nums[right]])
                    seen.add(key)
                }
                left++
                right--
            }
        }
    }
    
    return results
    
};