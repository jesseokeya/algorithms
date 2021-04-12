/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func deepestLeavesSum(root *TreeNode) int {
    var stack = []*TreeNode{root}; sum := 0
    for len(stack) > 0 {
        length := len(stack); total := 0
        for i := 0; i < length; i++ {
            v := stack[0]; total += v.Val
            stack = stack[1:]
            if v.Left != nil {
                stack = append(stack, v.Left)
            }
            if v.Right != nil {
                stack = append(stack, v.Right)
            }
        }
        sum = total
    }
    return sum
}