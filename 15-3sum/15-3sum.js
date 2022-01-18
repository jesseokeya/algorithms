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
            const sum = nums[i] + nums[left] + nums[right]
            if (sum > 0) right--
            else if (sum < 0) left++
            else {
                const result = [nums[i], nums[left], nums[right]]
                const key = result.join("")
                if (!seen.has(key)) {
                    results.push(result)
                    seen.add(key)
                }
                right--
                left++
            }
        }
    }
    return results
};