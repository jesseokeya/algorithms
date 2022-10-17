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
    const pPath = getPath(root, p), qPath = getPath(root, q)
    
    let i = 0, j = 0, result
    while (i < pPath.length && j < qPath.length) {
        if (pPath[i] !== qPath[j]) break
        result = pPath[i] || qPath[j]
        i++
        j++
    }
    
    return result
};

const getPath = (root, target) => {
    let results = []
    
    const dfs = (node, values) => {
        if (!node) return
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