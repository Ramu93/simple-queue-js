import { IQueue, Queue } from './queue'

describe('Test Product Queue', () => {
  let queue: IQueue<string>

  beforeAll(() => {
    queue = new Queue<string>()
  })

  it('isEmpty should return true', () => {
    expect(queue.isEmpty()).toBeTruthy()
  })

  it('getFirst on empty queue should return undefined', () => {
    expect(queue.getFirst()).toBeUndefined()
  })

  it('getLast on empty queue should return undefined', () => {
    expect(queue.getLast()).toBeUndefined()
  })

  it('add first element and check/match with first element in queue', () => {
    queue.enqueue('123')
    const firstElement = queue.getFirst()
    expect(firstElement).toBe('123')
  })

  it('isEmpty should return false when elements exist', () => {
    expect(queue.isEmpty()).toBeFalsy()
  })

  it('add second element, check for fist and last elements in queue', () => {
    queue.enqueue('234')
    expect(queue.getFirst()).toBe('123')
    expect(queue.getLast()).toBe('234')
  })

  it('dequeue, check for fist and last elements in queue', () => {
    queue.dequeue()
    expect(queue.getFirst()).toBe('234')
    expect(queue.getLast()).toBe('234')
  })

  it('queue should be empty after the last element is removed', () => {
    queue.dequeue()
    expect(queue.getFirst()).toBeUndefined()
    expect(queue.getLast()).toBeUndefined()
    expect(queue.isEmpty()).toBeTruthy()
  })
})
