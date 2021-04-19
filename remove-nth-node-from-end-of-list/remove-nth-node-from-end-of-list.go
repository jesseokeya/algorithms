/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func removeNthFromEnd(head *ListNode, n int) *ListNode {
    total := 0
    node := head
    
    for node != nil {
        node = node.Next
        total++
    }
    
    node = head
    prev := node
    
    count := 0
    target := total - n
  
    if target == 0 {
        head = head.Next
    }
    
    for node != nil {
        if count == target {
            prev.Next = node.Next
        }
        prev = node
        node = node.Next
        count++
    }
    
    return head
}