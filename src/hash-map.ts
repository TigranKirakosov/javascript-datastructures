class Node<T> {
  next: Node<T> | null
  key: string
  value: T

  constructor(key: string, value: T) {
    this.next = null
    this.key = key
    this.value = value
  }
}

export class HashMap<T extends any> {
  private array: (Node<T> | null)[]
  private capacity: number
  private size: number

  constructor(capacity: number) {
    if (capacity <= 0) this.throwCapacityError(capacity)

    this.array = new Array(capacity)
    this.capacity = capacity
    this.size = 0
  }

  get length(): number { return this.size }

  set(key: string, value: T): void {
    const hash = this.getKeyHash(key)
    const newNode = new Node(key, value)

    if (this.array[hash]) {
      newNode.next = this.array[hash]
      this.array[hash] = newNode
      this.size += 1
    }
    else {
      this.array[hash] = newNode
      this.size += 1
    }
  }

  get(key: string): T | undefined {
    const hash = this.getKeyHash(key)

    let currentNode = this.array[hash]

    while (currentNode) {
      if (currentNode.key == key) return currentNode.value
      currentNode = currentNode.next
    }

    return undefined
  }

  delete(key: string): T | undefined {
    const hash = this.getKeyHash(key)

    let currentNode = this.array[hash]
    let previousNode: Node<T> | null = null

    while (currentNode) {
      if (currentNode.key == key) {
        const value = currentNode.value

        if (!previousNode) {
          this.array[hash] = null
          this.size -= 1
          return value
        }

        previousNode.next = currentNode.next
        this.size -= 1
        return value
      }

      previousNode = currentNode
      currentNode = currentNode.next
    }

    return undefined
  }

  private getKeyHash(key: string): number {
    let hash = 0

    for (let i = 0; i < key.length; i++) {
      hash += key[i].charCodeAt(0)
    }

    return hash % this.capacity
  }

  private throwCapacityError(capacity: number): never {
    const message = `Capacity (provided: ${capacity}) must be above 0!`
    throw new Error(message)
  }
}

