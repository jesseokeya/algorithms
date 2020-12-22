/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (!root) return true
    return isBalanced(root.left) && 
           isBalanced(root.right) && 
           Math.abs(depth(root.left) - depth(root.right)) <= 1
};
​
const depth = (node) => {
    if (!node) return 0
    if (!node.left) return depth(node.right) + 1
    if (!node.right) return depth(node.left) + 1
    return Math.max(depth(node.left), depth(node.right)) + 1
}
