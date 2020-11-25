/**
 * Reverse a singly linked list.
 * @example:
 * 
 * Input: 1 -> 2 -> 3 -> 4 -> 5 -> NULL
 * Output: 5 -> 4 -> 3 -> 2 -> 1 -> NULL
 * 
 * Follow up:
 * 
 * A linked list can be reversed either iteratively or recursively. 
 * Could you implement both?
 *
 */

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
var reverseList = (head) => { 
    let prev = null, next = prev, curr = head
    while (curr) {
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    return prev
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = (head) => { 
    if (!head || !head.next) return head
    const reversedList = reverseList(head.next)
    head.next.next = head
    head.next = null
    return reversedList
}