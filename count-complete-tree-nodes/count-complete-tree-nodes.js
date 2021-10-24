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
var countNodes = function(root) {
    if (!root) return 0
    
    let count = 0
    const arr = [root]
    while (arr.length) {
        const node = arr.shift()
        if (node.left) { arr.push(node.left); count++ }
        if (node.right) { arr.push(node.right); count++ }
    }
    
    return count + 1
};