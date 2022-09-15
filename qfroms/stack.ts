class Node<T> {
  public value: any;
  public prev: Node<T> | undefined;

  constructor(value: any) {
    this.value = value;
    this.prev = undefined;
  }
}

export default class Stack<T> {
  public length: number;
  private tail: Node<T> | undefined;

  constructor() {
    this.tail = undefined;
    this.length = 0;
  }

  push(item: T): void {
    if (!this.tail) {
      this.tail = new Node<T>(item);
    } else if (this.tail) {
      const prevTail = this.tail;
      this.tail = new Node<T>(item);
      this.tail.prev = prevTail;
    }
    this.length++;
  }

  pop(): T | undefined {
    if (!this.tail) {
      return undefined;
    }

    const currentTail = this.tail;
    const prevTail = this.tail.prev;
    this.tail = prevTail;

    this.length--;
    return currentTail.value;
  }

  peek(): T | undefined {
    return this?.tail?.value;
  }
}
