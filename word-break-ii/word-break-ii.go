func wordBreak(s string, wordDict []string) []string {
	return dfs(s, wordDict, map[string][]string{})
}

func dfs(s string, wordDict []string, cache map[string][]string) []string {
	if res, ok := cache[s]; ok {
		return res
	}
	if len(s) == 0 {
		return []string{""}
	}

	var res []string
	for _, w := range wordDict {
		if len(w) <= len(s) && w == s[:len(w)] {
			for _, str := range dfs(s[len(w):], wordDict, cache) {
				if len(str) == 0 {
					res = append(res, w)
				} else {
					res = append(res, w+" "+str)
				}
			}
		}
	}
	cache[s] = res
	return res
}