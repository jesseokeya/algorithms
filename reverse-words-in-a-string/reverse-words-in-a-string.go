func reverseWords(s string) string {
    var results []string
    words := strings.Split(s, " ")
    
    for i := 0; i < len(words) / 2; i++ {
        idx := (len(words) - i) - 1
        words[i], words[idx] = words[idx], words[i]
    }
    
    for i := 0; i < len(words); i++ {
        if strings.TrimSpace(words[i]) != "" {
            results = append(results, words[i])
        }
    }
    
    return strings.TrimSpace(strings.Join(results, " "))
}