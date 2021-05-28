func wordBreak(s string, wordDict []string) bool {
    var walk func(string, []string, map[string]bool) bool
  
    walk = func(s string, words []string, memo map[string]bool) bool {
        if cached, exists := memo[s]; exists {
            return cached
        }
        
        if s == "" {
            return true
        }
        
        for _, word := range words {
            if strings.HasPrefix(s, word) {
                suffix := strings.TrimPrefix(s, word)
                result := walk(suffix, words, memo)
                if result {
                    memo[s] = true
                    return true
                }
            }
        }
        memo[s] = false
        return false
    }
    
    memo := map[string]bool{}
    return walk(s, wordDict, memo)
}