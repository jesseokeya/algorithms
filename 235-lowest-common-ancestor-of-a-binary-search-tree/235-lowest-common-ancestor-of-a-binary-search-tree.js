/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    const dfs = (node) => {
        // Base case
        if (!node) return null
        else if (node === p || node === q) return node
        
        // Recurse
        const left = dfs(node.left)
        const right = dfs(node.right)
        
        if (!left) return right
        else if (!right) return left

        return node
    }
    
    return dfs(root)
};