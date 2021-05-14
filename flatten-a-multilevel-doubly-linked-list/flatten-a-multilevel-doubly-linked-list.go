/**
 * Definition for a Node.
 * type Node struct {
 *     Val int
 *     Prev *Node
 *     Next *Node
 *     Child *Node
 * }
 */

func flatten(root *Node) *Node {
    if root == nil { return root }

    result := new(Node)
    var dfs func(n *Node)
    
    reference := result
    
    dfs = func(node *Node) {
        reference.Next = &Node{
            Val: node.Val,
        }
        prev := reference
        reference = reference.Next
        reference.Prev = prev
        prev.Next = reference
        if node.Child != nil { dfs(node.Child) }
        if node.Next != nil { dfs(node.Next) }
    }
    
    dfs(root)

    result.Next.Prev = nil
    return result.Next
}