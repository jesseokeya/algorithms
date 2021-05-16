func uniquePaths(m int, n int) int {
    var walk func(m, n int, memo map[string]int) int
    
    walk = func(r, c int, memo map[string]int) int {
        key := fmt.Sprintf("%d,%d", r, c)
        value, ok := memo[key]
        
        if ok { return value }
        
        if r == 1 && c == 1 { return 1 }
        if r == 0 || c == 0 { return 0 }
        
        result :=  walk(r - 1, c, memo) + walk(r, c - 1, memo)
        memo[key] = result
        
        return result
    }
    
    return walk(m, n, map[string]int{})
}