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
var maxAncestorDiff = function(root) {
    let result = -Infinity
    
    const dfs = (node, currmax, currmin) => {
        result = Math.max(result, Math.abs(currmax - currmin))
        if (node.left) dfs(node.left, Math.max(currmax, node.left.val), Math.min(currmin, node.left.val))
        if (node.right) dfs(node.right, Math.max(currmax, node.right.val), Math.min(currmin, node.right.val))
    }
    
    dfs(root, root.val, root.val)
    
    return result
};