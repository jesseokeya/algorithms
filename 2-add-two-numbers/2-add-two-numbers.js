/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const add = (A, B) => {
  const AL = A.length
  const BL = B.length
  const ML = Math.max(AL, BL)

  let carry = 0, sum = ''

  for (let i = 1; i <= ML; i++) {
    let a = +A.charAt(AL - i)
    let b = +B.charAt(BL - i)

    let t = carry + a + b
    carry = t/10 |0
    t %= 10

    sum = (i === ML && carry)
      ? carry*10 + t + sum
      : t + sum
  }

  return sum
}


var addTwoNumbers = function(l1, l2) {
    let strL1 = '', strL2 = ''
    while (l1 || l2) {
        if (l1) {
            strL1 = l1.val + strL1
            l1 = l1.next
        }
        if (l2) {
            strL2 = l2.val + strL2
            l2 = l2.next
        }
    }
    const sum = add(strL1, strL2)
    let result = new ListNode(), ref = result
    for (let i = sum.length - 1; i >= 0; i--) {
        const num = sum.charAt(i)
        ref.next = new ListNode(num, null)
        ref = ref.next
    }
    return result.next
};