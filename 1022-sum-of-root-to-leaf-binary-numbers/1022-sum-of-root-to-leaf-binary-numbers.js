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
var sumRootToLeaf = function(root) {
    let sum = 0
    const dfs = (node, prefix) => {
        prefix += node.val
        if (!node.left && !node.right) {
            sum += parseInt(prefix, 2)
            return sum
        }
        if (node.left) dfs(node.left, prefix)
        if (node.right) dfs(node.right, prefix)
    }
    dfs(root, '')
    return sum
};