func reverseString(s []byte)  {
    len := len(s) 
    for i := 0; i < len / 2; i++ {
        s[i], s[(len - i) - 1] = s[(len - i) - 1], s[i]
    }
}