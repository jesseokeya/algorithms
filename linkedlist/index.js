// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    insertFirst(data) {
        this.head = new Node(data, this.head)
    }

    size() {
        let count = 0, node = this.head
        while (node !== null) {
            count++
            node = node.next
        }
        return count
    }

    getFirst() {
        return this.head
    }

    getLast() {
        let node = this.head, last = node
        while (node !== null) {
            last = node
            node = node.next
        }
        return last
    }

    clear() {
        this.head = null
    }

    removeFirst() {
        this.head = this.head.next
    }

    removeLast() {
        if (!this.head) { return }
        if (!this.head.next) {
            this.head = null
            return
        }
        let previous = this.head, node = this.head.next
        while (node.next && node.next !== null) {
            previous = node
            node = node.next
        }
        previous.next = null
    }

    insertLast(data) {
        const last = this.getLast()
        if (last) {
            last.next = new Node(data)
        } else {
            this.head = new Node(data)
        }
    }

    getAt(index) {
        let node = this.head, counter = 0
        while (node) {
            if (counter === index) {
                return node
            }
            node = node.next
            counter++
        }
        return null
    }

    removeAt(index) {
        let currentNode = this.head, previousNode, count = 0
        if (!this.head) { return }
        if (index === 0) { this.head = currentNode.next; return }
        while (count < index) {
            count++
            previousNode = currentNode
            currentNode = currentNode.next
        }
        if (!currentNode) { return }
        previousNode.next = currentNode.next
    }

    insertAt(val, index) {
        let currentNode = this.head, count = 0, previousNode
        if (!this.head || index === 0) { this.insertFirst(val); return }
        if (index > this.size()) { this.insertLast(val); return }
        while (count < index) {
            previousNode = currentNode
            count++
            currentNode = currentNode.next
        }
        const node = new Node(val)
        node.next = currentNode
        previousNode.next = node
    }

    *[Symbol.iterator]() {
        let node = this.head
        while (node) {
            yield node
            node = node.next
        }
    }

    forEach(fn) {
        let node = this.head, counter = 0
        while (node) {
            fn(node, counter)
            node = node.next
            counter++
        }
    }
}

module.exports = { Node, LinkedList };
