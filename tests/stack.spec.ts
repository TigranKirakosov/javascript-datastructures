import { Stack } from "../src/stack"

describe(Stack, () => {
  it("maintains LIFO property", () => {
    const stack = new Stack<string>()

    expect(stack.pop()).toEqual(undefined)
    expect(stack.length).toBe(0)

    stack.push("Triangulo")
    stack.push("Cuadrado")
    stack.push("Circulo")
    expect(stack.peekTop()).toEqual("Circulo")
    expect(stack.peekBottom()).toEqual("Triangulo")
    expect(stack.length).toBe(3)

    expect(stack.pop()).toEqual("Circulo")
    expect(stack.pop()).toEqual("Cuadrado")
    expect(stack.peekTop()).toEqual("Triangulo")
    expect(stack.peekBottom()).toEqual("Triangulo")
    expect(stack.length).toBe(1)

    expect(stack.pop()).toEqual("Triangulo")
    expect(stack.pop()).toEqual(undefined)
    expect(stack.peekTop()).toEqual(undefined)
    expect(stack.peekBottom()).toEqual(undefined)
    expect(stack.length).toBe(0)
  })
})

