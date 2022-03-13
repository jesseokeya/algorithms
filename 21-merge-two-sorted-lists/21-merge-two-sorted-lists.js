/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    const first = getValues(list1), second = getValues(list2)
    let i = 0, j = 0, results = []
    
    while (i < first.length && j < second.length) {
        if (first[i] > second[j]) {
            results.push(second[j])
            j++
        } else if (first[i] < second[j]) {
            results.push(first[i])
            i++
        } else {
            results.push(first[i], second[j])
            i++
            j++
        }
    }
    
    if (i < first.length) {
        results = results.concat(first.slice(i))
    }
    
    if (j < second.length) {
        results = results.concat(second.slice(j))
    }
    
    return generateNode(results)
};

const generateNode = (values) => {
    const result = new ListNode()
    let curr = result
    for (const value of values) {
        curr.next = new ListNode(value)
        curr = curr.next
    }
    
    return result.next
}

const getValues = (node) => {
    const results = []
    let curr = node
    
    while (curr) {
        results.push(curr.val)
        curr = curr.next
    }
    
    return results
}