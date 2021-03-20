/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func inorderTraversal(root *TreeNode) []int {
    var result []int
    
    if root == nil{
        return result
    }
    
    result = append(result, inorderTraversal(root.Left)...)
    result = append(result, root.Val)
    result = append(result, inorderTraversal(root.Right)...)
    
    return result
}