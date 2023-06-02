class Node<T> {
  next: Node<T> | null
  value: T

  constructor(value: T) {
    this.next = null
    this.value = value
  }
}

export class Queue<T> {
  private head: Node<T> | null
  private tail: Node<T> | null
  private size: number

  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  get length(): number { return this.size }

  peekFront(): T | undefined {
    return this.head?.value
  }

  peekBack(): T | undefined {
    return this.tail?.value
  }

  enqueue(value: T): void {
    const newNode = new Node(value)

    if (this.size == 0) {
      this.head = this.tail = newNode
      this.size += 1
      return
    }

    this.tail!.next = newNode
    this.tail = newNode
    this.size += 1
  }

  dequeue(): T | undefined {
    if (this.size == 0) return
    if (this.size == 1) {
      const value = this.tail?.value

      this.head = this.tail = null
      this.size = 0

      return value
    }

    const value = this.head?.value

    this.head = this.head!.next
    this.size -= 1

    return value
  }
}

