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
var lowestCommonAncestor = function (root, p, q) {
  let i = 0,
    j = 0,
    result;
  const pValues = collect(root, p),
    qValues = collect(root, q);
  while (i < pValues.length && j < qValues.length) {
    if (pValues[i] === qValues[j]) result = pValues[i] || qValues[j];
    else break;
    i++;
    j++;
  }

  return result;
};

const collect = (root, target) => {
  let results = [];

  const dfs = (node, values) => {
    if (!node) return [];

    values.push(node);

    if (node === target) {
      results = values.slice();
      return;
    }

    dfs(node.left, values);
    dfs(node.right, values);

    values.pop();
  };

  dfs(root, []);

  return results;
};
