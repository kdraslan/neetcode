class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let chars = {}

        if (s.length !== t.length) {
            return false;
        }

        s.split('').forEach(letter => {
            if (chars[letter]) {
                chars[letter] = chars[letter] + 1;
            } else {
                chars[letter] = 1;
            }
        });

        try {
            t.split('').forEach(letter => {
                if (chars[letter]) { 
                    if (chars[letter] > 1) {
                    chars[letter] = chars[letter] - 1;
                    } else if (chars[letter] == 1) {
                        delete chars[letter]
                    } 
                }
                else {
                    throw Exception;
                }
            });
        } catch {
            return false;
        }

        return !Boolean(Object.keys(chars).length);
    }
}
