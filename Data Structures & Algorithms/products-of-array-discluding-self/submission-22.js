class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let output = [];
        let leftRunningSum = [];
        let rightRunningSum = [];

        let zeroCount = 0;
        let zeroIndex = -1;
        let totalFactor = 1;

        nums.forEach((num, index) => {
            output.push(0);
            leftRunningSum.push(1);
            rightRunningSum.push(1);

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
            for(let i = 1; i < nums.length; i++) {
                leftRunningSum[i] = nums[i-1] * leftRunningSum[i-1];
            }

            for(let i = nums.length - 2; i >= 0; i--) {
                rightRunningSum[i] = nums[i+1] * rightRunningSum[i + 1];
            }

            for (let i = 0; i < nums.length; i++) {
                output[i] = leftRunningSum[i]*rightRunningSum[i];
            }

            return output;
        }
    }
}
