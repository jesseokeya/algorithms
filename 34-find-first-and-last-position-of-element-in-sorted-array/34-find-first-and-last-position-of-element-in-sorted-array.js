/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const idx = find(nums, target)
    if (idx === -1) return [idx, idx]
    
    let end = idx
    while (nums[end + 1] === target) end++
    
    let start = end
    while (nums[start - 1] === target) start--

    return [start, end]
};


const find = (nums, target) => {
    let left = 0, right = nums.length - 1
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        const value = nums[mid]
        if (value > target) right = mid - 1
        else if (value < target) left = mid + 1
        else return mid
    }
    return -1
}