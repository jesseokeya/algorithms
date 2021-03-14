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
var swapNodes = function(head, k) {
    const mappings = {}
    let length = 0, node = head
    
    while (node) {
        mappings[length + 1] = node
        node = node.next
        length++
    }
    
    const fromHead = k, fromTail = (length - k) + 1
    const first = mappings[fromHead], second = mappings[fromTail]
    
    if (first && second) {
        const temp = first.val
        first.val = second.val
        second.val = temp
    }
    
    return head
};