/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    const seen = new WeakMap()
    let node = head
    while (node) {
        if (seen.has(node)) return true
        seen.set(node, true)
        node = node.next
    }
    return false
};