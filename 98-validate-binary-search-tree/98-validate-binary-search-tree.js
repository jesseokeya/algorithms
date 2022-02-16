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
    const validate = (node, min, max) => {
        if (!node) return true
        if (node.val > max || node.val < min) return false
        return validate(node.left, min, node.val - 1) && validate(node.right, node.val + 1, max)
    }
    
    return validate(root, -Infinity, Infinity)
};