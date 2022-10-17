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
var middleNode = function(head) {
    const cache = new Map()
    let curr = head, len = 0
    
    while (curr) {
        cache.set(len, curr)
        curr = curr.next
        len++
    }
    
    const mid = Math.floor(len / 2)
    return cache.get(mid)
};