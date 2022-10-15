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
 
  value = 1, min = -Infinity, max = Infinity, result
  true && true
  3 
 */
var isValidBST = function(root) {
    const isValid = (node, min, max) => {
        if (!node) return true
        if (node.val <= min || node.val >= max) return false
        return isValid(node.left, min, node.val) && isValid(node.right, node.val, max)
    }
    
    return isValid(root, -Infinity, Infinity)
};