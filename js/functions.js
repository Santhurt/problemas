export const Problems = {
    countVocals: (str = "") => {
        const vocals = ["a", "e", "i", "o", "u"];
        return [...str].reduce(
            (count, char) =>
                vocals.includes(char.toLowerCase()) ? count + 1 : count,
            0,
        );
    },
    longestPalindrome: function (str = "") {
        for (let i = str.length; i > 0; i--) {
            for (let start = 0; start <= str.length - i; start++) {
                if (this.isPalindrome(str, start + i)) {
                    return str.slice(start, start + i);
                }
            }
        }
        return "";
    },
    minimunSubstring: function (str = "", substr = "") {
        for (let end = substr.length; end <= str.length; end++) {
            for (let start = 0; start <= str.length - end; start++) {
                const slice = str.slice(start, start + end);
                if (this.containsChars(slice, substr)) {
                    return slice;
                }
            }
        }

        return "";
    },
    containsChars: function (str = "", substr = "") {
        return [...substr].every((ch) => str.includes(ch));
    },
    isPalindrome: function (str = "", i, j) {
        let start = i;
        let end = j - 1;

        while (start < end) {
            if (str[start] != str[end]) {
                return false;
            }
            start++;
            end++;
        }
        return true;
    },
    countRepeated: function (str = "") {
        let map = {};

        for (let i = 0; i < str.length; i++) {
            if (str[i] in map) {
                map[str[i]]++;
            } else {
                map[str[i]] = 1;
            }
        }
        return map;
    },
    longestSubstring: function (str = "") {
        const window = new Set();
        let start = 0;
        let bestStar = 0;
        let bestLength = -Infinity;

        for (let right = 0; right < str.length; right++) {
            const ch = str[right];

            while (window.has(ch)) {
                if (right - start + 1 > bestLength) {
                    bestLength = right - start + 1;
                    bestStar = start;
                }
                window.delete(ch);
                start++;
            }

            window.add(ch);
        }

        return str.slice(bestStar, bestStar + bestLength);
    },
    findMaxAverage: function (nums = [], k = 0) {},
};
