// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Node<T> {
  public value: any;
  public next: Node<T> | undefined;

  constructor(value: any) {
    this.value = value;
    this.next = undefined;
  }
}

export default class Queue<T> {
  public length: number;
  private head: Node<T> | undefined;
  private tail: Node<T> | undefined;

  constructor() {
    this.head = this.tail = undefined;
    this.length = 0;
  }

  enqueue(item: T): void {
    if (!this.head) {
      this.head = new Node<T>(item);
      this.tail = this.head;
    } else {
      if (this.tail) {
        this.tail.next = new Node<T>(item);
        this.tail = this.tail.next;
      }
    }
    this.length++;
  }

  deque(): T | undefined {
    if (!this.head) return undefined;

    const value = this.head.value;
    this.head = this.head.next;

    this.length--;
    return value;
  }

  peek(): T | undefined {
    return this?.tail?.value;
  }
}
