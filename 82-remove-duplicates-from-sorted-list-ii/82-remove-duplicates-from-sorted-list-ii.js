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
var deleteDuplicates = function(head) {
    let curr = head, hmap = new Map()
    while (curr) {
        if (!hmap.has(curr.val)) hmap.set(curr.val, 1)
        else hmap.set(curr.val, hmap.get(curr.val) + 1)
        
        curr = curr.next
    }
    
    const result = new ListNode()
    curr = result
    
    for (const [k, v] of hmap) {
        if (v === 1) {
            curr.next = new ListNode(k)
            curr = curr.next
        }
    }
    
    return result.next
};