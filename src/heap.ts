type NumberWeight = number

export interface HeapNode<T, Weight = NumberWeight> {
  weight: Weight
  value: T
}

export type CompareFn<T = NumberWeight> = (a: T, b: T) => boolean

export class Heap<T, Weight = NumberWeight> {
  private array: HeapNode<T, Weight>[]
  private compareFn: CompareFn<Weight>

  constructor(compareFn: CompareFn<Weight>) {
    this.array = new Array()
    this.compareFn = compareFn
  }

  get length(): number { return this.array.length }

  push(node: HeapNode<T, Weight>): void {
    this.array.push(node)
    this.heapifyUp(this.length - 1)
  }

  extractHead(): T | null {
    if (this.length === 0) return null
    if (this.length === 1) return this.array.pop()!.value

    const headValue = this.array[0].value

    this.array[0] = this.array[this.length - 1]
    this.array.pop()

    this.heapifyDown(0)

    return headValue
  }

  private heapifyUp(targetIndex: number): void {
    if (targetIndex <= 0) return

    const parentIndex = this.parentOf(targetIndex)

    const parent = this.array[parentIndex]
    const target = this.array[targetIndex]

    const shouldSwap = this.compareFn(target.weight, parent.weight)

    if (shouldSwap) {
      this.array[parentIndex] = target
      this.array[targetIndex] = parent
      this.heapifyUp(parentIndex)
    }
  }

  private heapifyDown(targetIndex: number): void {
    if (targetIndex >= this.length) return

    const leftChildIndex = this.leftChildOf(targetIndex)
    const rightChildIndex = this.rightChildOf(targetIndex)

    let swapIndex = targetIndex

    const shouldSwapWithLeft = leftChildIndex < this.length && this.compareFn(
      this.array[leftChildIndex].weight,
      this.array[swapIndex].weight,
    )

    if (shouldSwapWithLeft) {
      swapIndex = leftChildIndex
    }

    const shouldSwapWithRight = rightChildIndex < this.length && this.compareFn(
      this.array[rightChildIndex].weight,
      this.array[swapIndex].weight,
    )

    if (shouldSwapWithRight) {
      swapIndex = rightChildIndex
    }

    if (swapIndex != targetIndex) {
      const target = this.array[targetIndex]
      this.array[targetIndex] = this.array[swapIndex]
      this.array[swapIndex] = target
      this.heapifyDown(swapIndex)
    }
  }

  private parentOf(targetIndex: number): number {
    return Math.floor((targetIndex - 1) / 2)
  }

  private leftChildOf(targetIndex: number): number {
    return (targetIndex * 2) + 1
  }

  private rightChildOf(targetIndex: number): number {
    return (targetIndex * 2) + 2
  }
}

