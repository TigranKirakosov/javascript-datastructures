class Node<T> {
  next: Node<T> | null
  prev: Node<T> | null
  value: T

  constructor(value: T) {
    this.value = value
  }
}

export class LinkedList<T> {
  private head: Node<T> | null
  private tail: Node<T> | null
  private size: number

  constructor() {
    this.size = 0
    this.head = null
    this.tail = null
  }

  get length(): number { return this.size }

  peekHead(): T | undefined {
    return this.head?.value
  }

  peekTail(): T | undefined {
    return this.tail?.value
  }

  append(value: T): void {
    const newNode = new Node(value)

    if (!this.tail) {
      this.tail = this.head = newNode
      this.size += 1
      return
    }

    newNode.prev = this.tail
    this.tail.next = newNode
    this.tail = newNode
    this.size += 1
  }

  prepend(value: T): void {
    const newNode = new Node(value)

    if (!this.head) {
      this.head = this.tail = newNode
      this.size += 1
      return
    }

    newNode.next = this.head
    this.head.prev = newNode
    this.head = newNode
    this.size += 1
  }

  getAt(targetIndex: number): T | undefined {
    if (targetIndex > this.size || targetIndex < 0) return
    if (targetIndex == 0) return this.peekHead()
    if (targetIndex == this.size - 1) return this.peekTail()

    let searchIndex = 0
    let currentNode = this.head

    while (currentNode && searchIndex <= targetIndex) {
      if (searchIndex == targetIndex) return currentNode.value

      currentNode = currentNode.next
      searchIndex += 1
    }

    return
  }

  remove(value: T): void {
    let currentNode = this.head

    while (currentNode) {
      if (currentNode.value === value) break
      currentNode = currentNode.next
    }

    if (!currentNode || currentNode.value !== value) return

    if (currentNode === this.head && currentNode === this.tail) {
      this.tail = this.head = null
      this.size = 0
      return
    }

    if (currentNode === this.head) {
      this.head = this.head.next
      this.head!.prev = null
      this.size -= 1
      return
    }

    if (currentNode === this.tail) {
      this.tail = this.tail.prev
      this.tail!.next = null
      this.size -= 1
      return
    }

    const prev = currentNode.prev
    const next = currentNode.next

    if (prev) prev.next = next
    if (next) next.prev = prev
    this.size -= 1
  }

  insertAt(targetIndex: number, value: T): void {
    if (targetIndex > this.size || targetIndex < 0) return
    if (targetIndex == this.size) {
      this.append(value)
      return
    }
    if (targetIndex == 0) {
      this.prepend(value)
      return
    }

    const newNode = new Node<T>(value)

    let searchIndex = 0
    let currentNode = this.head

    while (currentNode && searchIndex < targetIndex) {
      currentNode = currentNode.next
      searchIndex += 1
    }

    if (searchIndex != targetIndex) return

    const prev = currentNode!.prev

    newNode.prev = prev
    if (prev) prev.next = newNode

    newNode.next = currentNode
    currentNode!.prev = newNode

    this.size += 1
  }

  removeAt(targetIndex: number): T | undefined {
    if (targetIndex >= this.size || targetIndex < 0) return
    if (targetIndex == 0) {
      const value = this.head!.value
      this.remove(value)
      return value
    }
    if (targetIndex === this.size - 1) {
      const value = this.tail!.value
      this.remove(value)
      return value
    }

    let searchIndex = 0
    let currentNode = this.head

    while (currentNode && searchIndex < targetIndex) {
      currentNode = currentNode.next
      searchIndex += 1
    }

    if (searchIndex != targetIndex) return

    const prev = currentNode!.prev
    const next = currentNode!.next

    if (prev) prev.next = next
    if (next) next.prev = prev

    this.size -= 1

    return currentNode?.value
  }
}

