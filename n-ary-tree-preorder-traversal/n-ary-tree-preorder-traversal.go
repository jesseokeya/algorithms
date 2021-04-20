/**
 * Definition for a Node.
 * type Node struct {
 *     Val int
 *     Children []*Node
 * }
 */

func preorder(root *Node) []int {
    results := make([]int, 0)
    if root == nil {
        return results
    }
    
    var dfs func(node *Node)
    
    dfs = func(node *Node) {
        results = append(results, node.Val)
        for _, child := range node.Children {
            dfs(child)
        }
    }
    
    dfs(root)
    
    
    return results
}