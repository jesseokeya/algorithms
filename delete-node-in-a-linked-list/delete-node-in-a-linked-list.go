/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func deleteNode(node *ListNode) {
    ref := node
    ref.Val = ref.Next.Val
    ref.Next = ref.Next.Next
}