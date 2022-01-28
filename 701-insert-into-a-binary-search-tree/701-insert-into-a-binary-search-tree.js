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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    const insert = (node, val) => {
        if (!node) return new TreeNode(val)
        if (val < node.val && node.left) {
            return insert(node.left, val)
        } else if (val < node.val) {
            node.left = new TreeNode(val)
        } else if (val > node.val && node.right) {
            return insert(node.right, val)
        } else if (val > node.val) {
            node.right = new TreeNode(val)
        }
        return root
    }
    
    return insert(root, val)
};