class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let output = [];
        let runningFactor = [];

        let zeroCount = 0;
        let zeroIndex = -1;
        let totalFactor = 1;

        nums.forEach((num, index) => {
            output.push(0);

            if (num === 0) {
                zeroCount += 1; 
                zeroIndex = index;
            } else {
                totalFactor *= num;
            }
        });

        if (zeroCount === 1) {
            output[zeroIndex] = totalFactor; 

            return output;
        } else if (zeroCount > 1) {
            return output;
        } else {
            nums.forEach((num, index) => {
                output[index] = totalFactor / num;
            });

            return output;
        }
    }
}
