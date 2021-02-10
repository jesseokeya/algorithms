/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
    if (!root) return root
    
    const nodes = []
    
    const dfs = (node, sum) => {
        if (node.right) dfs(node.right, sum)
        nodes.push(node)
        if (node.left) dfs(node.left, sum)
    }
    
    dfs(root, 0)
    
    let runningSum = null
    
    for (const node of nodes) {
        if (runningSum === null) runningSum = node.val
        else runningSum += node.val
        node.val = runningSum
    }
    
    return root
};