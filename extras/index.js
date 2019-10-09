const createMapping = arr => {
  const mapping = {};
  for (let i = 0; i < arr.length; i++) {
    mapping[arr[i]] = mapping[arr[i]] + 1 || 1;
  }
  return mapping;
};

const anagram = (first, second) => {
  if (first.length !== second.length) return false;
  const primary = createMapping(first);
  const secondary = createMapping(second);
  for (let key in primary) {
    if (!secondary[key]) return false;
    if (primary[key] !== secondary[key]) return false;
  }
  return true;
};

const sumZero = arr => {
  let left = 0;
  let right = arr.length - 1;
  if (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
  return undefined;
};

const slidingWindow = (arr, chunk) => {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < chunk; j++) {
      sum += arr[i + j];
    }
    result = Math.max(result, sum);
  }
  return result;
};

const isSubsequence = (first, second) => {
  // good luck. Add any arguments you deem necessar.
  if (second.includes(first)) return true;
  const context = second.split("");
  let trackIndex = 0;
  for (let i = 0; i < first.length; i++) {
    const newArr = context.slice(trackIndex, second.length);
    console.log(newArr);
    const char = first.charAt(i);
    const index = newArr.indexOf(char);
    if (index <= -1) return false;
    trackIndex = index;
  }
  return true;
};

function slowFib(num) {
  // add whatever parameters you deem necessary - good luck!
  if (num === 0) {
    return 0;
  }
  if (num === 1) {
    return 1;
  }
  return fib(num - 1) + fib(num - 2);
}

const memoize = fn => {
  const cache = {};
  return num => {
    if (cache[num]) {
      return cache[num];
    }
    cache[num] = fn(num);
    return cache[num];
  };
};

const fib = memoize(slowFib);

function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

function reverse(val) {
  // add whatever parameters you deem necessary - good luck!
  if (val.length <= 1) return val;
  return reverse(val.slice(1)) + val[0];
}

const binarySearch = (arr, val) => {
  // add whatever parameters you deem necessary - good luck!
  let start = 0,
    end = arr.length;
  let mid = Math.floor((start + end) / 2);
  while (arr[mid] !== val && start <= end) {
    console.log(mid);
    if (val < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
    mid = Math.floor((start + end) / 2);
  }
  return arr[mid] === val ? mid : -1;
};

/** Singly Linked List */
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    let newNode = new Node(val);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let previousNode = this.get(index - 1);
    let removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

/** Doubly Linked List */
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//     this.prev = null
//   }
// }

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.tail && this.tail.prev) {
      const node = this.tail.prev;
      node.next = null;
      this.tail = node;
    } else {
      this.tail = null;
      this.head = null;
    }
    this.length--;
    return this;
  }

  shift() {
    if (!this.head || !this.head.next) {
      this.tail = null;
      this.head = null;
    } else {
      const node = this.head.next;
      node.prev = null;
      this.head = node;
    }
    this.length--;
    return this;
  }

  unshift(val) {
    const node = new Node(val);
    if (!this.head) {
      this.push(val);
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0) return this.head;
    if (index > this.length) return this.tail;
    let count = 0;
    if (index <= Math.floor(this.length / 2)) {
      let node = this.head;
      while (index <= this.length) {
        if (count === index) return node;
        node = node.next;
        count++;
      }
    } else {
      let node = this.tail;
      while (index <= this.length) {
        if (count === index) return node;
        node = node.prev;
        count++;
      }
    }

    return null;
  }

  set(index, val) {
    const node = this.get(index);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    const beforeNode = this.get(index - 1);
    const afterNode = beforeNode.next;
    const node = new Node(val);
    if (beforeNode) {
      beforeNode.next = node;
      node.next = afterNode;
      node.prev = beforeNode;
      afterNode.prev = node;
      this.length++;
      return true;
    }
    return false;
  }

  remove(index) {
    if (index <= 0) this.shift();
    if (index >= this.length) this.pop();
    const removedNode = this.get(index);
    if (removedNode) {
      const afterNode = removedNode.next;
      const beforeNode = removedNode.prev;
      beforeNode.next = afterNode;
      afterNode.prev = beforeNode;
      this.length--;
      return afterNode;
    }
    return null;
  }

  reverse() {
    this.tail = this.head;
    let curr = this.head,
      temp = null;
    while (curr) {
      temp = curr.prev;
      curr.prev = curr.next;
      curr.next = temp;
      curr = curr.prev;
    }
    return temp;
  }
}

/** Binary Search Tree */
// class Node {
//   constructor(value) {
//     this.value = value
//     this.left = null
//     this.right = null
//   }
// }

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  static print(tree) {
    const arr = [tree.root],
      result = [];
    while (arr.length > 0) {
      const node = arr.shift();
      if (node && (node.left || node.right)) {
        if (node.left) arr.push(node.left);
        if (node.right) arr.push(node.right);
      }
      result.push(node.value);
    }
    return result;
  }

  insert(value) {
    if (!this.root) {
      this.root = new Node(value);
      return this;
    }
    const arr = [this.root];
    while (arr.length) {
      const node = arr.shift();
      if (value > node.value) {
        if (node.right) arr.push(node.right);
        else node.right = new Node(value);
      } else {
        if (node.left) arr.push(node.left);
        else node.left = new Node(value);
      }
    }
    return this;
  }

  contains(value) {
    const arr = [this.root];
    while (arr.length) {
      const node = arr.shift();
      if (node.value === value) return true;
      if (value > node.value) {
        if (node.right) arr.push(node.right);
        else return false;
      } else {
        if (node.left) arr.push(node.left);
        else return false;
      }
    }
    return false;
  }

  find(value) {
    const arr = [this.root];
    while (arr.length) {
      const node = arr.shift();
      if (node.value === value) return node;
      if (value > node.value) {
        if (node.right) arr.push(node.right);
        else return null;
      } else {
        if (node.left) arr.push(node.left);
        else return null;
      }
    }
    return null;
  }
}

/**
 * child => 2n - 1 && 2n - 2
 * parent =>  (n - 1)/2 && (n - 2)/2
 **/
class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    this.bubbleUp();
    return this;
  }

  extractMax() {
    const last = this.values.length - 1;
    [this.values[last], this.values[0]] = [this.values[0], this.values[last]];
    this.values.pop();
    let index = 0,
      elem = this.values[index],
      right = Math.floor(index * 2 + 1),
      left = Math.floor(index * 2 + 2);
    while (
      index < this.values.length &&
      (elem < this.values[left] || elem < this.values[right])
    ) {
      console.log("index:", index);
      console.log("element:", elem);
      if (this.values[left] > this.values[right]) {
        [this.values[left], this.values[index]] = [
          this.values[index],
          this.values[left]
        ];
        index = left;
        left = Math.floor(index * 2 + 2);
      } else {
        [this.values[right], this.values[index]] = [
          this.values[index],
          this.values[right]
        ];
        index = right;
        right = Math.floor(index * 2 + 2);
      }
    }
    return this;
  }

  bubbleUp() {
    let index = this.values.length - 1,
      ctx = Math.floor((index - 1) / 2);
    while (index > 0 && this.values[index] > this.values[ctx]) {
      [this.values[index], this.values[ctx]] = [
        this.values[ctx],
        this.values[index]
      ];
      index = ctx;
      ctx = Math.floor((index - 1) / 2);
    }
  }
}

/* PriorityQueue */
class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    const node = new Node(val, priority);
    this.values.push(node);
    this.bubbleUp();
    return this;
  }

  bubbleUp() {
    let index = this.values.length - 1,
      parentIndex = Math.floor((index - 1) / 2);
    while (index > 0) {
      const elem = this.values[index];
      const parentElement = this.values[parentIndex];
      if (parentElement.priority > elem.priority) {
        [this.values[index], this.values[parentIndex]] = [
          this.values[parentIndex],
          this.values[index]
        ];
      }
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return this;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue("Common Cold", 5);
priorityQueue.enqueue("Gunshot Wound", 1);
priorityQueue.enqueue("High Fever", 4);
priorityQueue.enqueue("Broken Arm", 2);
priorityQueue.enqueue("Glass In Foot", 3);
priorityQueue.enqueue("HIV", 8);
priorityQueue.enqueue("Lower Back Pain", 10);
priorityQueue.enqueue("Sexually Transmitted Disease", 11);
priorityQueue.enqueue("Headache", 20);
priorityQueue.enqueue("Poison", 9);

priorityQueue.dequeue();
priorityQueue.dequeue();
// priorityQueue.dequeue()
