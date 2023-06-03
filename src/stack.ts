class Node<T> {
  next: Node<T> | null
  value: T

  constructor(value: T) {
    this.next = null
    this.value = value
  }
}

export class Stack<T> {
  private top: Node<T> | null
  private bottom: Node<T> | null
  private size: number

  constructor() {
    this.top = null
    this.bottom = null
    this.size = 0
  }

  get length(): number { return this.size }

  peekTop(): T | undefined {
    return this.top?.value
  }

  peekBottom(): T | undefined {
    return this.bottom?.value
  }

  push(value: T): void {
    const newNode = new Node(value)

    if (this.size == 0) {
      this.top = this.bottom = newNode
      this.size += 1
      return
    }

    newNode.next = this.top
    this.top = newNode
    this.size += 1
  }

  pop(): T | undefined {
    if (this.size == 0) return
    if (this.size == 1) {
      const value = this.top?.value

      this.top = this.bottom = null
      this.size -= 1

      return value
    }

    const value = this.top!.value

    this.top = this.top!.next
    this.size -= 1

    return value
  }
}

