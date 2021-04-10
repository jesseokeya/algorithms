func rotateString(A string, B string) bool {
    if A == B {
        return true
    }
    
    shifts := len(A)
    split := strings.Split(A, "")
    
    for i := 0; i < shifts; i++ {
        split = append(split[1:], split[:1]...)
        if B == strings.Join(split, "") {
            return true
        }
    }
    
    return false
}