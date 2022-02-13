/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const results = []
    const combine = (values, prefix, idx, seen) => {
        if (prefix.length <= values.length) {
            results.push(prefix)
        } else {
            return
        }
        for (let i = idx; i < values.length; i++) {
            const value = values[i]
            if (!seen.has(i)) {
                seen.add(i)
                combine(values, prefix.concat(value), i, seen)
                seen.delete(i)
            }
        }
    }
    combine(nums, [], 0, new Set())
    return results
};