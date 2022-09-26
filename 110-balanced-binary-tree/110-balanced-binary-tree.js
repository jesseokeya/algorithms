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
var isBalanced = function(root) {
    return getHeight(root) !== -1
};

const getHeight = (node) => {
    if (!node) return 0
    
    const left = getHeight(node.left)
    const right = getHeight(node.right)
    
    if (left === -1 || right === - 1 || Math.abs(left - right) > 1) {
        return -1
    }
    
    return 1 + Math.max(left, right)
}