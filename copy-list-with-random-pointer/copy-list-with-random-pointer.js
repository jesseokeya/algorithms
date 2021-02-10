/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    const copyMappings = new Map()
    const cache = new WeakMap()
    let original = head, copy = new Node(), index = 0, newNode = copy
    
    while (original) {
        cache.set(original, index)
        newNode.next = new Node(original.val)
        newNode = newNode.next
        copyMappings.set(index, newNode)
        original = original.next
        index++
    }
    copy = copy.next
    original = head
    index = 0
    
    const mappings = {}
    
    while (original) {
        mappings[index] = cache.get(original.random)
        original = original.next
        index++
    }
    
    let node = copy
    index = 0
    while (node) {
        const randomPointer = mappings[index]
        if (randomPointer === undefined) {
            node.random = null
        } else {
            node.random = copyMappings.get(randomPointer)
        }
        node = node.next
        index++
    }
    
    return copy
};