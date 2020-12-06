/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (!root) return root
    const arr = [root]
    while (arr.length > 0) {
        let prev = null
        const size = arr.length
        for (let i = 0; i < size; i++) {
            const node = arr.shift()
            if (prev) prev.next = node
            if (node.left) arr.push(node.left)
            if (node.right) arr.push(node.right)
            prev = node
        }
    }
    return root
};
