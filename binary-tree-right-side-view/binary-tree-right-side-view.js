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
    const arr = [root], results = []
    while (arr.length) {
        const len = arr.length
        for (let i = 0; i < len; i++) {
            const rightmost = arr[len - 1]
            if (i === 0) results.push(rightmost.val)
            const node = arr.shift()
            if (node.left) arr.push(node.left)
            if (node.right) arr.push(node.right)
        }
    }
    return results
};