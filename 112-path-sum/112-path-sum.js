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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    let result = true
    const dfs = (node, sum) => {
        if (!node) return false
        if (!node.left && !node.right) return targetSum === sum+node.val
        return dfs(node.left, sum + node.val) || dfs(node.right, sum + node.val)
    }
    return dfs(root, 0)
};