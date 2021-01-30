/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let first = nums[0], second = nums[0]
    while (true) {
        first = nums[first]
        second = nums[nums[second]]
        if (first === second) break
    }
    
    let p1 = nums[0], p2 = first
    while (p1 !== p2) {
        p1 = nums[p1]
        p2 = nums[p2]
    }
    return p1
};