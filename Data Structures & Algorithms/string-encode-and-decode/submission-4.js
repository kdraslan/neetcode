class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.length ? strs.join(`__split__`) : `__empty__`;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        return str == `__empty__` ? [] : str.split(`__split__`);
    }
}
