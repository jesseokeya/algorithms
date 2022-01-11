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
    const dfs = (node, currSum) => {
        currSum *= 2
        currSum += node.val
        if (!node.left && !node.right) {
           result += currSum
           return result 
        }
        if (node.left) dfs(node.left, currSum)
        if (node.right) dfs(node.right, currSum)
    }
    dfs(root, 0)
    return result
};