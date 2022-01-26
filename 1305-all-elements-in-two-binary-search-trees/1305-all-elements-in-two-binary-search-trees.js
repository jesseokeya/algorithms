/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
    const first = [], second = []
    const dfs = (node, collection) => {
        if (!node) return
        if (node.left) dfs(node.left, collection)
        collection.push(node.val)
        if (node.right) dfs(node.right, collection)
    }
    dfs(root1, first)
    dfs(root2, second)
    let result = [], i = 0, j = 0
    while (i < first.length && j < second.length) {
        if (first[i] > second[j]) {
            result.push(second[j])
            j++
        } else if (first[i] < second[j]) {
            result.push(first[i])
            i++
        } else {
            result.push(first[i], second[j])
            i++
            j++
        }
    }
    
    if (i < first.length) {
        result = result.concat(first.slice(i))
    }

    if (j < second.length) {
        result = result.concat(second.slice(j))
    }
    
    return result
};