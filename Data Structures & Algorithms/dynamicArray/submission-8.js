class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.currentIndex = 0;
        this.dynamicArray = [];
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        return this.dynamicArray[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        this.dynamicArray[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        if (this.currentIndex >= this.capacity) {
            this.resize();
        }

        this.dynamicArray[this.currentIndex] = n;
        this.currentIndex++; 
    }

    /**
     * @returns {number}
     */
    popback() {
        const poppedElement = this.dynamicArray[this.currentIndex-1];

        delete this.dynamicArray[this.currentIndex-1];
        this.currentIndex--;

        return poppedElement;
    }   

    /**
     * @returns {void}
     */
    resize() {
        this.capacity *= 2;
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.dynamicArray.filter(element => element !== null).length;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity;
    }
}
