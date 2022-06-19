/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let target = null, count = 0, node = head
    const values = []
    
    while (node) {
        if (count === left - 1) target = node
        values.push(node.val)
        node = node.next
        count++
    }
    
    let idx = (values.length  - (values.length - right)) - 1
    
    for (let i = idx; i >= left - 1; i--) {
        target.val = values[i]
        target = target.next
    }
    
    return head
};