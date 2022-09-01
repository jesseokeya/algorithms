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
 * @return {number}
 */
var goodNodes = function(root) {
    let result = 0
    
    const dfs = (node, prevMax) => {
        if (node.val >= prevMax) result++
        if (node.left) dfs(node.left, Math.max(prevMax, node.val))
        if (node.right) dfs(node.right, Math.max(prevMax, node.val))
    }
    
    dfs(root, -Infinity)
    
    return result
};