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
    const pPath = getPath(root, p)
    const qPath = getPath(root, q)
    
    let i = 0, j = 0, lastSeen = null
    while (i < pPath.length && j < qPath.length) {
        console.log(pPath[i])
        if (pPath[i] === qPath[j]) lastSeen = pPath[i]
        else break
        i++
        j++
    }
    
    return lastSeen
};

const getPath = (root, target) => {
    let results = []
    
    const dfs = (node, prefix) => {
        if (!node) return
        prefix.push(node)
        if (node === target) {
            results = prefix.slice()
            return
        }
        dfs(node.left, prefix)
        dfs(node.right, prefix)
        prefix.pop()
        
    }
    
    dfs(root, [])
    
    return results
}