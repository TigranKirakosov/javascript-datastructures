import { Heap } from "../src/heap"

describe(Heap, () => {
  describe("Max Heap", () => {
    let maxHeap: Heap<string>

    beforeEach(() => {
      maxHeap = new Heap<string>((a, b) => a > b)
    })

    it("works", () => {
      expect(maxHeap.length).toBe(0)

      maxHeap.push({ weight: 500, value: "2" })
      maxHeap.push({ weight: 50, value: "3" })
      maxHeap.push({ weight: 5000, value: "1" })

      expect(maxHeap.length).toBe(3)

      expect(maxHeap.extractHead()).toEqual("1")
      expect(maxHeap.extractHead()).toEqual("2")
      expect(maxHeap.extractHead()).toEqual("3")

      expect(maxHeap.length).toBe(0)
    })
  })


  describe("Min Heap", () => {
    let minHeap: Heap<string>

    beforeEach(() => {
      minHeap = new Heap<string>((a, b) => a < b)
    })

    it("works", () => {
      expect(minHeap.length).toBe(0)

      minHeap.push({ weight: 500, value: "2" })
      minHeap.push({ weight: 50, value: "3" })
      minHeap.push({ weight: 5000, value: "1" })

      expect(minHeap.length).toBe(3)

      expect(minHeap.extractHead()).toEqual("3")
      expect(minHeap.extractHead()).toEqual("2")
      expect(minHeap.extractHead()).toEqual("1")

      expect(minHeap.length).toBe(0)
    })
  })
})

