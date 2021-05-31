func suggestedProducts(products []string, searchWord string) [][]string {
    results := [][]string{}
    
    sort.Strings(products)
    
    for index, _ := range searchWord {
        prefix :=  searchWord[:index + 1]
        
        matches := []string{}
        for _, product := range products {
            if strings.HasPrefix(product, prefix) {
                matches = append(matches, product) 
            }
        }
        
        if len(matches) <= 3 {
            results = append(results, matches) 
        } else {
            results = append(results, matches[:3])
        }
    }
    
    return results
}