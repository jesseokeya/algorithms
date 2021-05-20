/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func levelOrder(root *TreeNode) [][]int {
    result := [][]int{}
    if root == nil { return result }
    
    queue := []*TreeNode{root}
    
    for len(queue) > 0 {
        length := len(queue)
        level := []int{}
        
        for i := 0; i < length; i++ {
            node := queue[0]
            queue = queue[1:]
            level = append(level, node.Val)

            if node.Left != nil { 
                queue = append(queue, node.Left)
            }
            if node.Right != nil { 
                queue = append(queue, node.Right)
            }
        }
        result = append(result, level)
    }
    
    return result 
}