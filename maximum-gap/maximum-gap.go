func maximumGap(nums []int) int {
    result := 0
    if len(nums) < 2 {
        return result
    }
    
    sort.Ints(nums)
    prev := nums[0]
    
    for i := 1; i < len(nums); i++ {
        num := nums[i]
        diff := num - prev
        result = maximum(result, diff)
        prev = num
    }
    
    return result
}

func maximum(i, j int) int {
    if i > j {
        return i
    }
    return j
}