func runningSum(nums []int) []int {
    sum := nums[0]
    for i := 1; i < len(nums); i++ {
        sum += nums[i]
        nums[i] = sum
    }
    return nums
}