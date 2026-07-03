class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let lookup = {};

        for (let i=0; i<nums.length; i++) {
            if (!lookup[nums[i]]) {
                lookup[nums[i]] = true;
            } else {
                return true;
            }
        }

        return false;
    }
}
