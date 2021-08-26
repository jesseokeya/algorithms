/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func reverseList(head *ListNode) *ListNode {
    if head == nil {
        return head
    }
    
    var prev, next *ListNode
    curr := head
    
    for curr.Next != nil {
        next = curr.Next
        curr.Next = prev
        prev = curr
        curr = next
    }

    curr.Next = prev
    return curr
}