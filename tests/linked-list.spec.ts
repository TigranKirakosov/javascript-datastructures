import { LinkedList } from "../src/linked-list"

describe(LinkedList, () => {
  let list: LinkedList<string>

  beforeEach(() => {
    list = new LinkedList<string>()
  })

  it("performs appends and peeks at correct nodes", () => {
    expect(list.peekHead()).toEqual(undefined)
    expect(list.peekTail()).toEqual(undefined)
    expect(list.length).toBe(0)

    list.append("Brain")

    expect(list.peekHead()).toEqual("Brain")
    expect(list.peekTail()).toEqual("Brain")
    expect(list.length).toBe(1)

    list.append("Heart")

    expect(list.peekHead()).toEqual("Brain")
    expect(list.peekTail()).toEqual("Heart")
    expect(list.length).toBe(2)

    list.prepend("Hat")

    expect(list.peekHead()).toEqual("Hat")
    expect(list.peekTail()).toEqual("Heart")
    expect(list.length).toBe(3)

    list.prepend("Halo")

    expect(list.peekHead()).toEqual("Halo")
    expect(list.peekTail()).toEqual("Heart")
    expect(list.length).toBe(4)
  })

  it("performs gets by given node index", () => {
    expect(list.getAt(-1)).toEqual(undefined)
    expect(list.getAt(0)).toEqual(undefined)

    list.append("Rome")
    list.append("St. Petersburg")
    list.append("Buenos Aires")
    list.append("Pekin")
    list.append("Niger")
    expect(list.length).toBe(5)

    expect(list.getAt(0)).toEqual("Rome")
    expect(list.getAt(1)).toEqual("St. Petersburg")
    expect(list.getAt(2)).toEqual("Buenos Aires")
    expect(list.getAt(3)).toEqual("Pekin")
    expect(list.getAt(4)).toEqual("Niger")
    expect(list.getAt(42)).toEqual(undefined)
  })

  it("performs removes by value and peeks at correct nodes", () => {
    list.append("Head")
    list.append("Neck")
    list.append("Body")
    list.append("Legs")
    expect(list.length).toBe(4)

    list.remove("Neck")
    expect(list.peekHead()).toEqual("Head")
    expect(list.peekTail()).toEqual("Legs")
    expect(list.length).toBe(3)

    list.remove("Legs")
    expect(list.peekHead()).toEqual("Head")
    expect(list.peekTail()).toEqual("Body")
    expect(list.length).toBe(2)

    list.remove("Head")
    expect(list.peekHead()).toEqual("Body")
    expect(list.peekTail()).toEqual("Body")
    expect(list.length).toBe(1)

    list.remove("Body")
    expect(list.peekHead()).toEqual(undefined)
    expect(list.peekTail()).toEqual(undefined)
    expect(list.length).toBe(0)
  })

  it("performs inserts at given node index in a list", () => {
    list.insertAt(-1, "Question")
    list.insertAt(42, "Answer")
    expect(list.peekHead()).toEqual(undefined)
    expect(list.peekTail()).toEqual(undefined)
    expect(list.length).toBe(0)

    list.insertAt(0, "Book")
    expect(list.peekHead()).toEqual("Book")
    expect(list.peekTail()).toEqual("Book")
    expect(list.length).toBe(1)

    list.insertAt(0, "Zipper")
    expect(list.peekHead()).toEqual("Zipper")
    expect(list.peekTail()).toEqual("Book")
    expect(list.length).toBe(2)

    list.insertAt(1, "Bottle of water")
    expect(list.peekHead()).toEqual("Zipper")
    expect(list.peekTail()).toEqual("Book")
    expect(list.length).toBe(3)

    list.remove("Zipper")
    expect(list.peekHead()).toEqual("Bottle of water")
    expect(list.peekTail()).toEqual("Book")
    expect(list.length).toBe(2)

    list.insertAt(2, "Gameboy")
    expect(list.peekHead()).toEqual("Bottle of water")
    expect(list.peekTail()).toEqual("Gameboy")
    expect(list.length).toBe(3)
  })

  it("performs removes at given index in a list", () => {
    expect(list.removeAt(-1)).toEqual(undefined)
    expect(list.removeAt(0)).toEqual(undefined)
    expect(list.removeAt(42)).toEqual(undefined)

    list.append("Head")
    list.append("Neck")
    list.append("Body")
    list.append("Legs")
    list.append("Tail")
    expect(list.length).toBe(5)

    expect(list.removeAt(1)).toEqual("Neck")
    expect(list.removeAt(2)).toEqual("Legs")
    expect(list.peekHead()).toEqual("Head")
    expect(list.peekTail()).toEqual("Tail")
    expect(list.length).toBe(3)

    expect(list.removeAt(0)).toEqual("Head")
    expect(list.removeAt(0)).toEqual("Body")
    expect(list.peekHead()).toEqual("Tail")
    expect(list.peekTail()).toEqual("Tail")
    expect(list.length).toBe(1)

    list.prepend("New body")
    list.prepend("New head")
    expect(list.removeAt(2)).toEqual("Tail")
    expect(list.peekHead()).toEqual("New head")
    expect(list.peekTail()).toEqual("New body")
    expect(list.length).toBe(2)
  })
})

