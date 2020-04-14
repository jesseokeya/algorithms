/**
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its depth = 3.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) {
    return 0;
  }
  if (!root.left) {
    return maxDepth(root.right) + 1;
  }
  if (!root.right) {
    return maxDepth(root.left) + 1;
  }
  return maximum(maxDepth(root.right), maxDepth(root.left)) + 1;
};

const maximum = (first, second) => {
  return first > second ? first : second;
};
