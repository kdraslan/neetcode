class Solution {
    sortLetters(str) {
        let letters = str.split('');

        for (let i = 0; i < letters.length; i++) {
            for (let j = 0; j < (letters.length - i - 1); j++) {
                if (letters[j] > letters[j + 1]) {
                    let temp = letters[j];

                    letters[j] = letters[j + 1];
                    letters[j + 1] = temp;
                }
            }
        }

        return letters.join('');
    }

    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let groups = {};

        strs.forEach(str => {
            let sorted = this.sortLetters(str);

            if (groups[sorted]) {
                groups[sorted] = [...groups[sorted], str];
            } else {
                groups[sorted] = [str];
            }
        });

        return Object.keys(groups).reduce((accumulator, current) => [...accumulator, groups[current]], [])
    }
}
