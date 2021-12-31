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
var maxAncestorDiff = function(root) {
    let result = -Infinity
    
    const queue = [root]
    while (queue.length) {
        const node = queue.shift()
        result = Math.max(findAbsDiff(node, node.val), result)
        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
    }
    
    return result
};

const findAbsDiff = (root, value) => {
    let result = -Infinity
        
    const queue = [root.left, root.right]
    while (queue.length) {
        const node = queue.shift() 
        if (node) result = Math.max(result, Math.abs(node.val - value))
        if (node && node.left) queue.push(node.left)
        if (node && node.right) queue.push(node.right)
   }
    
   return result
}