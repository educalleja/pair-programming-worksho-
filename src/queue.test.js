import { getQueue } from './queue';

test('should start empty', () => {
    const queue = getQueue()
    expect(queue.isEmpty()).toBe(true);
});
