/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let node = head
    if (!node || node && !node.next) return head
    while (node) {
        [node.next.val, node.val] = [node.val, node.next.val]
        node = node.next.next
        if (node && !node.next) return head
    }
    return head
};
