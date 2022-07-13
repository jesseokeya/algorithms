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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const results = []
    
    if (!root) return results
    
    const dfs = (node, level) => {
        results[level] = [...(results[level] || []), node.val]
        if (node.left) dfs(node.left, level + 1)
        if (node.right) dfs(node.right, level + 1)
    }
    
    dfs(root, 0)
    
    return results
};