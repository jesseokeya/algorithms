/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func maxDepth(root *TreeNode) int {
    depth := 0
    if root == nil {
        return depth
    }
    
    children := []*TreeNode{root.Left, root.Right}
    for _, child := range children {
        if child != nil {
            depth = max(depth, maxDepth(child))
        }
    }
    return depth + 1
}

func max(i, j int) int {
    if i > j {
        return i
    }
    return j
}