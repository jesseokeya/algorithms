/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const target = 0, results = [], seen = new Set()
    nums = nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        let left = i + 1, right = nums.length - 1
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right]
            if (sum > target) right--
            else if (sum < target) left++
            else {
                const key = `${nums[i]},${nums[left]},${nums[right]}`
                if (!seen.has(key)) {
                    results.push([nums[i], nums[left], nums[right]])
                    seen.add(key)
                }
                left++
                right--
            }
        }
    }
    return results
};