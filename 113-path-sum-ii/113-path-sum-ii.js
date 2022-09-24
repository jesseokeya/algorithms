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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    const results = []
    
    const dfs = (node, target, sum, values) => {
        if (!node) return
        const val = node.val
        const isLeaf = !node.left && !node.right
        const newSum = sum + val 
        if (isLeaf && newSum  === target) {
            values.push(val)
            results.push(values)
        }
    
        dfs(node.left, target, sum + val, values.concat(val))
        dfs(node.right, target, sum + val, values.concat(val))
    }
    
    dfs(root, targetSum, 0, [])
    
    return results
};