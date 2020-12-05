var twoSum = function(nums, target) {
    const cache = {}
    for (let i = 0; i < nums.length; i++) {
        const val = nums[i], diff = target - val
        if (cache.hasOwnProperty(diff)) return [cache[diff], i]
        cache[val] = i
    }
    return []
};
