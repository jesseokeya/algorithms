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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const results = []
    
    const dfs = (node, prefix) => {
        if (!node) return
        const isLeafNode = !node.left && !node.right
        
        const val = node.val
        if (isLeafNode) {
            prefix.push(val)
            results.push(prefix.join('->'))
        }
        
        dfs(node.left, prefix.concat(val))
        dfs(node.right, prefix.concat(val))
    }

    dfs(root, [])
    
    return results
};