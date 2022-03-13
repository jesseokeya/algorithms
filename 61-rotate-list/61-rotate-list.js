/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    let curr = head, values = []
    while (curr) {
        values.push(curr.val)
        curr = curr.next
    }
    
    const result = new ListNode(), len = values.length, stop = len - (k % len)
    const newValues = values.slice(stop, len).concat(values.slice(0, stop))
    let copy = result
    for (const val of newValues) {
        copy.next = new ListNode(val)
        copy = copy.next
    }
    
    return result.next
};