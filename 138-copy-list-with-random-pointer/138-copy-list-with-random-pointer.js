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
   const newHead = new Node(), positions = []
   let curr = head, copy = newHead, count = 0
   while (curr) {
       copy.next = new Node(curr.val)
       positions.push(copy.next)
       curr.idx = count
       curr = curr.next
       copy = copy.next
       count++
   }
    
   curr = head
   copy = newHead.next
   while (curr) {
       if (curr.random) {
        copy.random = positions[curr.random.idx]
       }
       curr = curr.next
       copy = copy.next
   }
    
   return newHead.next
};