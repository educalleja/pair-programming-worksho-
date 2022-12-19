export function getQueue() {
    const queue = [];

    return {
        isEmpty() {
            return queue.length === 0;
        },
        get() {
            return queue.shift();
        },
        add(element) {
            queue.push(element);
        },
        printQueue() {
            return [...queue];
        }
    }
}