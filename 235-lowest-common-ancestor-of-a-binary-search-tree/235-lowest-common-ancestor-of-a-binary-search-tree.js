/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    const pPath = getPaths(root, p), qPath = getPaths(root, q)
    
    let i = 0, j = 0, result = null
    while (i <= pPath.length && j <= qPath.length) {
        if (pPath[i] === qPath[j]) result = pPath[i] || qPath[j]
        else break
        i++
        j++
    }
    
    return result
};

const getPaths = (root, target) => {
    let results = []
    
    const dfs = (node, values) => {
        if (!node) return []
        
        values.push(node)
        
        if (node === target) {
            results = values.slice()
            return
        }
    
        dfs(node.left, values)
        dfs(node.right, values)
        
        values.pop()
    }
    
    dfs(root, [])
    
    return results
}