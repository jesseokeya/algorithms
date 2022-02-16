/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (!head) return null
    
    let curr = head, prev = null
    while (curr) {
        prev = curr
        curr = curr.next
        if (!curr) continue
        
        const temp = prev.val
        prev.val = curr.val
        curr.val = temp
        curr = curr.next
    }
    
    return head               
};