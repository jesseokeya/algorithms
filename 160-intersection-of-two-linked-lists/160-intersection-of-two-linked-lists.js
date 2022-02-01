/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    const seen = new WeakSet()
    
    let curr = headA
    while (curr) {
        seen.add(curr)
        curr = curr.next
    }
    
    curr = headB
    while (curr) {
        if (seen.has(curr)) return curr
        curr = curr.next
    }
    
    return null
};