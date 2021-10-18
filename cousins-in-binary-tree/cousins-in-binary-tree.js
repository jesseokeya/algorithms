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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    const mappings = {}
    
    const dfs = (node, parent = {}, depth = 0) => {
        if (node.left) dfs(node.left, node, depth + 1)
        if (node.val === x || node.val === y) {
            if (node.val === x) {
                mappings[x] = { depth, parent: parent.val}
            }
            if (node.val === y) {
                mappings[y] = { depth, parent: parent.val}
            }
        }
        if (node.right) dfs(node.right, node, depth + 1)
    }
    
    dfs(root)
    
    const sameDepth = mappings[x].depth === mappings[y].depth
    const sameParent = mappings[x].parent !== mappings[y].parent
    
    return sameDepth && sameParent
};