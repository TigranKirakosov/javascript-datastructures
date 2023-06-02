import { Queue } from "../src/queue"

describe(Queue, () => {
  it("maintains FIFO property", () => {
    const queue = new Queue<string>()

    expect(queue.dequeue()).toEqual(undefined)
    expect(queue.peekFront()).toEqual(undefined)
    expect(queue.peekBack()).toEqual(undefined)
    expect(queue.length).toBe(0)

    queue.enqueue("Task 1")
    queue.enqueue("Task 2")
    queue.enqueue("Task 3")
    queue.enqueue("Task 4")
    queue.enqueue("Task 5")
    expect(queue.peekFront()).toEqual("Task 1")
    expect(queue.peekBack()).toEqual("Task 5")
    expect(queue.length).toBe(5)

    expect(queue.dequeue()).toEqual("Task 1")
    expect(queue.dequeue()).toEqual("Task 2")
    expect(queue.dequeue()).toEqual("Task 3")
    expect(queue.peekFront()).toEqual("Task 4")
    expect(queue.peekBack()).toEqual("Task 5")
    expect(queue.length).toBe(2)

    expect(queue.dequeue()).toEqual("Task 4")
    expect(queue.dequeue()).toEqual("Task 5")
    expect(queue.dequeue()).toEqual(undefined)
    expect(queue.peekFront()).toEqual(undefined)
    expect(queue.peekBack()).toEqual(undefined)
    expect(queue.length).toBe(0)
  })
})

