class Solution {
    sortAndReturn(map, k) {
        const firstKey = Object.keys(map)[0];

        let elements = [[map[firstKey], Number(firstKey)]];

        const { [firstKey]: firstValue, ...rest } = map;

        Object.entries(rest).forEach(([key, value]) => {
            let placed = false;

            if (elements.length !== k || value > elements[elements.length - 1][0]) {
                for (let i = 0; i < elements.length; i++) {
                    if (value > elements[i][0]) {
                        elements.splice(i, 0, [value, Number(key)]);
                        placed = true;
                        break;
                    }
                }

                if (!placed && elements.length < k) {
                    elements[elements.length] = [value, Number(key)];
                } else if (placed && elements.length > k) {
                    elements.pop();
                }
            }
        });

        return elements.map((pair) => pair[1]);
    }

    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = {};

        nums.forEach((num) => {
            map[num] = map[num] ? map[num] + 1 : 1;
        });

        return this.sortAndReturn(map, k);
    }
}
