func uniquePaths(m int, n int) int {
    dp := make([][]int, m)
    
    for i := 0; i < m; i++ {
        dp[i] = make([]int, n)
    }
    
    dp[0][0] = 1
    
    for i := 0; i < m; i++ {
        for j := 0; j < n; j++ { 
            current := dp[i][j]
            if j + 1 < n {
                dp[i][j + 1] += current
            }
            if i + 1 < m {
                dp[i + 1][j] += current
            }
        }
    }
    
    
    
    return dp[m - 1][n - 1]
}