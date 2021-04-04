class Node {
  constructor(value) {
    this.value = value
  } 
}

/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.first = null
    this.last = null
    this.length = 0
    this.maxSize = k
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if (this.length === this.maxSize) return false
    if (!this.first || !this.last) {
      this.first = new Node(value)
      this.last = this.first
      this.length++
      return this
    }
    const newNode = new Node(value)
    this.last.next = newNode
    this.last = newNode
    this.length++
    return true
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if (this.length <= 0) return false
    if (!this.first) {
      this.first = null
      this.last = null
      return this.first
    }
    this.first = this.first.next
    this.length--
    if (this.length === 0) {
      this.first = null
      this.last = null
    }
    return true
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    return this.first ? this.first.value : -1
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    return this.last ? this.last.value : -1
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.length === 0
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.length === this.maxSize
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */