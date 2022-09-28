/**
 * @param {number[]} nums
 * @return {boolean}
 *
 */
var canPartition = function(nums) {
    // Get the total sum of items in nums
    const total = nums.reduce((acc, val) => acc + val, 0)
    
    // if the total is odd it cant be split into two so return early
    if (total % 2 !== 0) return false
    
    // Recurse to find all possibile combinations
    // Params -> nums, index, runningSum, total & map for memoization
    // To prevent duplicated work
    return isPossiblePartition(nums, 0, 0, total, new Map())
};

const isPossiblePartition = (nums, idx, runningSum, total, memo) => {
    // Memo key to avoid duplicated work we use idx and runningSum
    // Beacause on line 38 below they are the only params changes while we recurse
    const key = `${idx}|${runningSum}`
    // If key exisits in memo return the memo value
    if (memo.has(key)) return memo.get(key)
    
    // Base Cases
    // 1.) If runningSum * 2 is equal to total return true
    // Given a sample [1,5,11,5] where total is 22 and result is [11], [1, 5, 5]
    // If (1 + 5 + 5 * 2) == total return true
    // 2.) if the idx is greater than length of nums
    // 3.) If the sum is > (total / 2) means we cant split evenly so return false i.e
    // For example [1,5,11,5] above again if we have 5 + 11 = 16 which is greater than 11
    // Where we get 11 by the total 22 / 2 we return false since its already greater than half
    if (runningSum * 2 === total) return true
    if (idx >= nums.length || runningSum > (total / 2)) return false
    
    // We always want to be making progress towards hiting the base case so we increment idx
    // The first considers stand alones i.e in the example -> [1,5,11,5]
    // [11] is equal to total 22 / 2 and the second considers combinations [1, 5, 5]
    // If either first or second is true bubble up the recursive stack and return result
    const result = isPossiblePartition(nums, idx + 1, runningSum, total, memo) || 
                   isPossiblePartition(nums, idx + 1, runningSum + nums[idx], total, memo)
    
    // Add to cache 
    memo.set(key, result)
    
    // Return result of calculation
    return memo.get(key)
}