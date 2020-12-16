/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    return validate(root, -Infinity, Infinity);
};
​
const validate = (node, min, max) => {
    if (!node) { return true }
    if (node.val > max || node.val < min) { return false }
    return validate(node.left, min, node.val - 1) && validate(node.right, node.val + 1, max) 
}
