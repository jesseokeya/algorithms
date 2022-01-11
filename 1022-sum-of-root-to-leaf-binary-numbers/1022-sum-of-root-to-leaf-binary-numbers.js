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
    let result = 0
    const dfs = (node, s = '') => {
        s += node.val
        if(!node.left && !node.right) return result += parseInt(s, 2) 
        if (node.left) dfs(node.left, s)
        if (node.right) dfs(node.right, s)
    }
    dfs(root)
    return result
};