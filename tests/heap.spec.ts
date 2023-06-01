import { Heap } from "../src/heap"

describe(Heap, () => {
  describe("edge cases", () => {
    let maxHeap: Heap<string>

    beforeEach(() => {
      maxHeap = new Heap<string>((a, b) => a > b)
    })

    it("does not return anything if nothing had been put previously", () => {
      expect(maxHeap.length).toBe(0)

      expect(maxHeap.extractHead()).toEqual(null)
      expect(maxHeap.extractHead()).toEqual(null)
      expect(maxHeap.length).toBe(0)
    })

    it("correctly extracts the only value", () => {
      expect(maxHeap.length).toBe(0)

      maxHeap.push({ weight: 100, value: "table" })
      expect(maxHeap.length).toBe(1)

      expect(maxHeap.extractHead()).toEqual("table")
      expect(maxHeap.length).toBe(0)

      expect(maxHeap.extractHead()).toEqual(null)
      expect(maxHeap.length).toBe(0)
    })

    it("sorts nodes with weight of float type", () => {
      expect(maxHeap.length).toBe(0)

      maxHeap.push({ weight: -1.2, value: "data 5" })
      maxHeap.push({ weight: 5, value: "data 2" })
      maxHeap.push({ weight: 7.5, value: "data 1" })
      maxHeap.push({ weight: -0.5, value: "data 4" })
      maxHeap.push({ weight: 2.5, value: "data 3" })

      expect(maxHeap.extractHead()).toEqual("data 1")
      expect(maxHeap.extractHead()).toEqual("data 2")
      expect(maxHeap.extractHead()).toEqual("data 3")
      expect(maxHeap.extractHead()).toEqual("data 4")
      expect(maxHeap.extractHead()).toEqual("data 5")

      expect(maxHeap.length).toBe(0)
    })
  })

  describe("where head has maximum weight", () => {
    let maxHeap: Heap<string>

    beforeEach(() => {
      maxHeap = new Heap<string>((a, b) => a > b)
    })

    it("extracts values in correct order", () => {
      expect(maxHeap.length).toBe(0)

      maxHeap.push({ weight: -5050, value: "Task 5" })
      maxHeap.push({ weight: 500, value: "Task 2" })
      maxHeap.push({ weight: -505, value: "Task 4" })
      maxHeap.push({ weight: 50, value: "Task 3" })
      maxHeap.push({ weight: 5000, value: "Task 1" })

      expect(maxHeap.length).toBe(5)

      expect(maxHeap.extractHead()).toEqual("Task 1")
      expect(maxHeap.extractHead()).toEqual("Task 2")
      expect(maxHeap.extractHead()).toEqual("Task 3")
      expect(maxHeap.extractHead()).toEqual("Task 4")
      expect(maxHeap.extractHead()).toEqual("Task 5")

      expect(maxHeap.length).toBe(0)
    })
  })

  describe("where head has minimum weight", () => {
    let minHeap: Heap<string>

    beforeEach(() => {
      minHeap = new Heap<string>((a, b) => a < b)
    })

    it("extracts values in correct order", () => {
      expect(minHeap.length).toBe(0)

      minHeap.push({ weight: -5050, value: "Task 1" })
      minHeap.push({ weight: 500, value: "Task 4" })
      minHeap.push({ weight: -505, value: "Task 2" })
      minHeap.push({ weight: 50, value: "Task 3" })
      minHeap.push({ weight: 5000, value: "Task 5" })

      expect(minHeap.length).toBe(5)

      expect(minHeap.extractHead()).toEqual("Task 1")
      expect(minHeap.extractHead()).toEqual("Task 2")
      expect(minHeap.extractHead()).toEqual("Task 3")
      expect(minHeap.extractHead()).toEqual("Task 4")
      expect(minHeap.extractHead()).toEqual("Task 5")

      expect(minHeap.length).toBe(0)
    })
  })
})

