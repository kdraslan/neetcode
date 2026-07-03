class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.length ? strs.join(`__s__`) : `__e__`;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        return str == `__e__` ? [] : str.split(`__s__`);
    }
}
