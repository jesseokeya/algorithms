func evalRPN(tokens []string) int {
    type fn func(int, int)int 
    
    mappings := map[string]fn {
        "+": func(a, b int) int { return a + b },
        "-": func(a, b int) int { return a - b },
        "*": func(a, b int) int { return a * b },
        "/": func(a, b int) int { return a / b },
    }
    
    stack := []int{}
    
    for _, token := range tokens {
        fn, ok := mappings[token]
        if !ok {
            stack = append(stack, Atoi(token))
        } else {
            values := stack[len(stack) - 2:]
            first, second := values[0], values[1]
            stack = stack[:len(stack) - 2]
            stack = append(stack, fn(first, second))
        }
    }
    return stack[0]
}

func Atoi(s string) int {
    result, _ := strconv.Atoi(s)
    return result
}