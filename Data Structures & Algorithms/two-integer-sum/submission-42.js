class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let lookup = {};

        try {
            nums.forEach((num, index) => {
                if (lookup[num]) {
                    lookup[num] = [...lookup[num], index];
                } else {
                    lookup[num] = [index];
                }

                if (lookup[target-num]) {
                    if (!(target-num == num && lookup[num].length == 1)) {
                        throw [index, lookup[target-num][0]];
                    }
                }
            });
        } catch (e) {
            return e;
        }
    }
}
