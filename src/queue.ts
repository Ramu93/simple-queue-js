export interface IQueue<T> {
  isEmpty: () => boolean
  enqueue: (element: T) => void
  dequeue: () => T | undefined
  getFirst: () => T | undefined
  getLast: () => T | undefined
}

export class Queue<T> implements IQueue<T> {
  private readonly elements: Record<number, T>
  private head: number
  private tail: number

  constructor() {
    this.elements = {}
    this.head = 0
    this.tail = 0
  }

  isEmpty(): boolean {
    return Object.keys(this.elements).length === 0
  }

  enqueue(element: T): void {
    this.elements[this.tail] = element
    this.tail++
  }

  dequeue(): T | undefined {
    if (!this.isEmpty()) {
      const element = this.elements[this.head]!
      delete this.elements[this.head]
      this.head++
      return element
    }
    return undefined
  }

  getFirst(): T | undefined {
    if (!this.isEmpty()) {
      return this.elements[this.head]!
    }
    return undefined
  }

  getLast(): T | undefined {
    if (!this.isEmpty()) {
      return this.elements[this.tail - 1]!
    }
    return undefined
  }
}
