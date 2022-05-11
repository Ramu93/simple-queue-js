# simple-queue-typescript

## Installation 

```
npm i simple-queue-typescript
```

## Usage JavaScript

```js
import Queue from 'simple-queue-typescript'

const queue = new Queue()

// add items to queue
queue.enqueue(123)
queue.enqueue('Hello world!')
queue.enqueue([1, 2, 3])


// remove elements from queue 
const element = queue.dequeue()

// get first element - does not remove the element from queue
const firstElement = queue.getFirst()

// get last element - does not remove the element from queue
const lastElement = queue.getLast()

// check if the queue is empty
const isEmpty = queue.isEmpty()
```

## Usage TypeScript

```ts
import Queue from 'simple-queue-typescript'

const queue = new Queue<string>()

// add items to queue
queue.enqueue('123')
queue.enqueue('Hello world!')
queue.enqueue('1, 2, 3')


// remove elements from queue 
const element = queue.dequeue()

// get first element - does not remove the element from queue
const firstElement = queue.getFirst()

// get last element - does not remove the element from queue
const lastElement = queue.getLast()

// check if the queue is empty
const isEmpty = queue.isEmpty()
```
