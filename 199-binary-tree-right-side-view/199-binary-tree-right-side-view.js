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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (!root) return []
    const stack = [root], results = []
    
    while (stack.length) {
        const len = stack.length, level = []
        for (let i = 0; i < len; i++) {
            const node = stack.shift()
            level.push(node.val)
            if (node.left) stack.push(node.left)
            if (node.right) stack.push(node.right)
        }
        results.push(level[level.length - 1])
    }
    
    return results
};