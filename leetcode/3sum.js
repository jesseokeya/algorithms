/**
 * Given an array nums of n integers, are there elements a, b, c in nums such
 * that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
 *
 * Notice that the solution set must not contain duplicate triplets.
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const results = [];
    if (nums.length < 3) return results;

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1,
            right = nums.length - 1,
            sum = 0 - nums[i];
        if (i >= 0 && nums[i] !== nums[i - 1]) {
            while (left < right) {
                if (nums[left] + nums[right] < sum) left++;
                else if (nums[left] + nums[right] > sum) right--;
                else {
                    results.push([nums[i], nums[left], nums[right]]);
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    while (left < right && nums[right] === nums[right - 1]) right--;
                    left++;
                    right--;
                }
            }
        }
    }
    return results;
};
