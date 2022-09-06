/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return []
    
    const queue = [root], levels = []
    while (queue.length) {
        const len = queue.length, level = []
        for (let i = 0; i < len; i++) {
            const node = queue.shift()
            if (node?.children?.length > 0) queue.push(...node.children)
            level.push(node.val)
        }
        levels.push(level)
    }
    
    return levels
};