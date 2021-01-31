/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let slow = head, fast = head
    if (!fast || !fast.next || !fast.next.next) return null
    while (fast && fast.next && fast.next.next) {
        slow = slow.next
        fast = fast.next.next
        if (slow === fast) break
    }
    
    let p1 = head, p2 = slow
    
    while (p1 && p2 && p1 !== p2) {
        p1 = p1.next
        p2 = p2.next
    }
    
    return p2
};
