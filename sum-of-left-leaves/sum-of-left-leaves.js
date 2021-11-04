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
var sumOfLeftLeaves = function(root) {
    let result = 0
    
    const dfs = (node) => { 
        if (node.left) {
            dfs(node.left)
            if (!node?.left?.left && !node?.left?.right) {
                result += node?.left?.val || 0
            }
        }
        
        if (node.right) dfs(node.right)
    }
    
    dfs(root)
    
    return result
};