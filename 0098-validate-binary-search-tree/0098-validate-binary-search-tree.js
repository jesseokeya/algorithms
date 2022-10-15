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
 * @return {boolean}
 */
var isValidBST = function(root) {
    let values = []
    
    const dfs = (node) => {
        if (!node) return 
        
        dfs(node.left)
        values.push(node.val)
        dfs(node.right)
    }
    
    dfs(root)
    
    for (let i = 0; i < values.length; i++) {
        if (values[i] >= values[i + 1]) return false
    }
    
    return true
};