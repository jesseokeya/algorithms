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
var averageOfLevels = function(root) {
    const arr = [root], results = []
    
    while (arr.length) {
        let average = 0
        const length = arr.length
        
        for (let i = 0; i < length; i++) {
            const node = arr.shift()
            average += node.val
            if (node.left) arr.push(node.left)
            if (node.right) arr.push(node.right)
        }
        
        average /= length
        results.push(average)
        
        average = 0
    }
    
    return results
};