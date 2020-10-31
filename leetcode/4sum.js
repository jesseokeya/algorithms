/**
 * Given an array nums of n integers and an integer target, are there elements a, b, c, 
 * and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array 
 * which gives the sum of target.
 * 
 * Notice that the solution set must not contain duplicate quadruplets
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    if (nums.length < 4) return [];
    nums.sort((a,b) => a-b);
    const res = [];
    function combine(depth, start, cur) {
        if (depth === 4) {
            if (cur.reduce((acc,cur)=>acc+cur) === target) res.push(cur.slice());
            return;
        }
        for (let i = start; i < nums.length; i++) {
            if (i > start && nums[i] == nums[i-1]) continue;
            cur.push(nums[i]);

            // move to the next depth
            combine(depth+1, i+1, cur);

            // backtrack to previous state
            cur.pop();
        }
        return res;
    }
    return combine(0, 0, []);
};