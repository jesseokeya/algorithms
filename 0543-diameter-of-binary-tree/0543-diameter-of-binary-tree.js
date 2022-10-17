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
var diameterOfBinaryTree = function(root) {
    let diameter = 0
    
    const dfs = (node) => {
        if (!node) return 0
        
        const left = dfs(node.left)
        const right = dfs(node.right)
        
        diameter = Math.max(diameter, left + right)
        
        return 1 + Math.max(left, right)
    }
    
    dfs(root)
    
    
    return diameter
};

