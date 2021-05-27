func maxProduct(words []string) int {
    max := 0
    for i, first := range words {
        for j, second := range words {
            if i != j {
                localMax := len(first) * len(second)
                unique := isUnique(first, second)
                if unique && localMax > max {
                    max = localMax
                }
            }
        } 
    }
    
    return max
}

func isUnique(a, b string) bool {
    for _, v := range a {
        if strings.Contains(b, string(v)) {
            return false
        }
    }
    return true
}