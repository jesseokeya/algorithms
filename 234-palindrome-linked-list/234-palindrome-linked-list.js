/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let reverse = '', result = ''
    
    while (head) {
        const val = head.val
        reverse = val + reverse
        result += val
        head = head.next
    }
    
    return reverse === result
};