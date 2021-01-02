/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */
​
var getTargetCopy = function(original, cloned, target) {
    let result = null
    const dfs = (node) => {
        if (node.left) dfs(node.left)
        if (node.val === target.val) return result = node
        if (node.right) dfs(node.right)
    }
    
    dfs(cloned)
    
    return result
};
