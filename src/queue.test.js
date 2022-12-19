import { getQueue } from './queue';

test('should start empty', () => {
    const queue = getQueue()
    expect(queue.isEmpty()).toBe(true);
});

test('#get', () => {
    const queue = getQueue()
    queue.add(1)
    queue.add(2)
    queue.add(3)
    queue.add(4)
    expect(queue.get()).toBe(1);
    expect(queue.get()).toBe(2);
    expect(queue.get()).toBe(3);
    expect(queue.get()).toBe(4);
    expect(queue.get()).toBe(undefined);
    expect(queue.isEmpty()).toBe(true);
});

test('#add', () => {
    const queue = getQueue()
    queue.add(1)
    expect(queue.isEmpty()).toBe(false);
    expect(queue.get()).toBe(1);
});

test('#printQueue', () => {
    const queue = getQueue()
    queue.add(1)
    queue.add(2)
    expect(queue.printQueue()).toBe([1,2]);
});