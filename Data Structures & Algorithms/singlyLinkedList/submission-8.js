class LinkedList {
    constructor() {
        this.linkedList = [];
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        return this.linkedList[index] ?? -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        this.linkedList = [val, ...this.linkedList];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        this.linkedList = [...this.linkedList, val];
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        console.log(index);
        console.log(this.linkedList);

        if (this.linkedList[index]) {
            this.linkedList.splice(index, 1);

            console.log(this.linkedList);
            return true;
        }

        return false;
    }

    /**
     * @return {number[]}
     */
    getValues() {
        return this.linkedList;
    }
}
