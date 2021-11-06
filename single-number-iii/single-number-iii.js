/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
   const cache = new Map(), result = []
   
   for (let i = 0; i < nums.length; i++) {
       const value = nums[i]
       if (!cache.has(value)) {
           cache.set(value, 1)
       } else {
           cache.set(value, cache.get(value) + 1)
       }
   }
    
   for (const [k, v] of cache) {
       if (v === 1) result.push(k)
   }
    
   return result
};