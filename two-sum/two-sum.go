func twoSum(nums []int, target int) []int {
    cache := map[int]int{}
    for i := 0; i < len(nums); i++ {
        diff := target - nums[i]
        value, exists := cache[diff]
        if exists {
            return []int{value, i}
        }
        cache[nums[i]] = i
    }
    return []int{}
}