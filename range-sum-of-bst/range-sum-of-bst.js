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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    let sum = 0
    
    const dfs = (node) => {
        const value = node.val
        if (node.left) dfs(node.left)
        if (value >= low && value <= high) sum += value
        if (node.right) dfs(node.right)
    }
    
    dfs(root)
    return sum
};