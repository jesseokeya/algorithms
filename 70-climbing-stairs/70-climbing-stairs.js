/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const climb = (step, memo) => {
        if (memo.has(step)) return memo.get(step)
        if (step < 0) return 0
        else if (step === 0) return 1
        memo.set(step, climb(step - 1, memo) + climb(step - 2, memo))
        return memo.get(step)
    }
    
    return climb(n, new Map())
    
};