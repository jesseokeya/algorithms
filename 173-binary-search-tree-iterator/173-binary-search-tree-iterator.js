/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
    const values = []
    const dfs = (node) => {
        if (node.left) dfs(node.left)
        values.unshift(node.val)
        if (node.right) dfs(node.right)
    }
    dfs(root)
    this.values = values
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    return this.values.pop()
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.values.length !== 0
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */