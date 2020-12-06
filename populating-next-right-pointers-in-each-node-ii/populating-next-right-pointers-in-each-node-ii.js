/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
​
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (!root) return root
    const arr = [root]
    while (arr.length > 0) {
        const size = arr.length, levels = []
        for (let i = 0; i < size; i++) {
            const node = arr.shift()
            levels.push(node)
            if (node.left) arr.push(node.left)
            if (node.right) arr.push(node.right)
        }
        for (let i = 1; i < levels.length; i++) {
            const prev = levels[i - 1], curr = levels[i]
            if (prev) prev.next = curr
        }
    }
    return root
};
