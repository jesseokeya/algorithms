func combinationSum4(nums []int, target int) int {
    size := target + 1
    var dp = make([]int, size, size)
    dp[0] = 1
    
    for i := 1; i <= target; i++ {
        for j := 0; j < len(nums); j++ {
            if i - nums[j] >= 0 {
                dp[i] += dp[i - nums[j]]
            }
        }
    }
    
    return dp[target]
}