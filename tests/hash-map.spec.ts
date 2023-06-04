import { HashMap } from "../src/hash-map"

describe(HashMap, () => {
  let map: HashMap<any>

  beforeEach(() => {
    map = new HashMap<any>(5)
  })

  it("throws an error when the capacity is initialized with an incorrect number", () => {
    expect(() => new HashMap(-5))
      .toThrowError(new Error("Capacity (provided: -5) must be above 0!"))

    expect(() => new HashMap(0))
      .toThrowError(new Error("Capacity (provided: 0) must be above 0!"))
  })

  it("stores value by key and retrieves value by key", () => {
    expect(map.length).toBe(0)

    map.set("x", 1)
    map.set("y", 2)
    map.set("z", 3)
    expect(map.length).toBe(3)

    expect(map.get("x")).toEqual(1)
    expect(map.get("y")).toEqual(2)
    expect(map.get("z")).toEqual(3)
  })

  it("stores value with same key-hash and finds it properly", () => {
    expect(map.length).toBe(0)

    map.set("cat", 1)
    map.set("tac", 2)
    map.set("cta", 3)
    expect(map.length).toBe(3)

    expect(map.get("cat")).toEqual(1)
    expect(map.get("tac")).toEqual(2)
    expect(map.get("cta")).toEqual(3)
  })

  it("deletes value by key", () => {
    expect(map.length).toBe(0)

    map.set("x", 1)
    map.set("y", 2)
    map.set("z", 3)
    expect(map.length).toBe(3)

    expect(map.delete("y")).toEqual(2)
    expect(map.delete("y")).toEqual(undefined)
    expect(map.length).toBe(2)

    expect(map.delete("x")).toEqual(1)
    expect(map.delete("z")).toEqual(3)
    expect(map.length).toBe(0)

    expect(map.delete("nonsense")).toEqual(undefined)
    expect(map.length).toBe(0)
  })

  it("deletes value by same key-hash properly", () => {
    expect(map.length).toBe(0)

    map.set("cat", 1)
    map.set("tac", 2)
    map.set("cta", 3)
    expect(map.length).toBe(3)

    expect(map.delete("tac")).toEqual(2)
    expect(map.delete("tac")).toEqual(undefined)
    expect(map.length).toBe(2)

    expect(map.delete("cat")).toEqual(1)
    expect(map.delete("cta")).toEqual(3)
    expect(map.length).toBe(0)
  })
})

