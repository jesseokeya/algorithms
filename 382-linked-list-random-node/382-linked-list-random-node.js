/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
var Solution = function(head) {
    const nodes = new Map()
    let length = 0, curr = head
    while (curr) {
        nodes.set(length, curr)
        curr = curr.next
        length++
    }
    this.length = length
    this.nodes = nodes
    this.head = head
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function() {
    const nodes = this.nodes, len = this.length
    let curr = this.head
    const random = Math.floor(Math.random() * len)
    return nodes.get(random).val
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */