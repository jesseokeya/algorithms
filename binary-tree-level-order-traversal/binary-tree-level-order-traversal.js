/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return []
    const arr = [root], result = []
    while (arr.length) {
        const size = arr.length, values = []
        for (let i = 0; i < size; i++) {
            const node = arr.shift()
            values.push(node.val)
            if (node.left) arr.push(node.left) 
            if (node.right) arr.push(node.right) 
        }
        result.push(values)
    }
    return result
};
