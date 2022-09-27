/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (!lists.length) return null
    
    let result = lists.pop()
    const stack = lists
    
    while (stack.length) {
        const current = stack.pop()
        result = mergeLists(result, current)
    }
    
    return result
};

const mergeLists = (original, current) => {
    const newOriginal = new ListNode()
    let first = original, second = current, curr = newOriginal
    
    while (first && second) {
        if (first.val > second.val) {
            curr.next = new ListNode(second.val)
            curr = curr.next
            second = second.next
        } else if (first.val < second.val) {
            curr.next = new ListNode(first.val)
            curr = curr.next
            first = first.next
        } else {
            curr.next = new ListNode(first.val, new ListNode(second.val))
            curr = curr.next.next
            second = second.next 
            first = first.next
        }
    }
    
    if (second) curr.next = second
    else if (first) curr.next = first
    
    return newOriginal.next
}