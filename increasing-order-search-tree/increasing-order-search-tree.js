/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    const result = new TreeNode(root.val)
    let reference = result
    const dfs = (node) => {
        if (node.left) dfs(node.left)
        reference.right = new TreeNode(node.val)
        reference = reference.right
        if (node.right) dfs(node.right)
    }
    dfs(root)
    return result.right
};
