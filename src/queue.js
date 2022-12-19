export function getQueue() {
    const queue = [];

    return {
        isEmpty() {
            return queue.length === 0;
        },
        get() {
            // Returns the first element of the queue
        },
        add(element) {
            // Adds an element into the queue
            // Returns undefined
        },
        printQueue() {
            // Returns an array of all elements in the queue
        }
    }
}