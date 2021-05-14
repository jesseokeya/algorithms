/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func flatten(root *TreeNode)  {
    if root == nil { return }
    
    var dfs func(node *TreeNode)
    values := []int{}

    dfs = func(node *TreeNode) {
        values = append(values, node.Val)
        if node.Left != nil { dfs(node.Left) }
        if node.Right != nil { dfs(node.Right) }
    }
    
    dfs(root)
    
    root.Left = nil
    root.Right = nil
    
    node := root
    for i := 1; i < len(values); i++ {
        node.Right = &TreeNode{
            // Left: nil,
            Right: nil,
            Val: values[i],
        }
        node = node.Right
    }
}