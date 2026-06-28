import { ListNode } from "./data.js";

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
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @returns {ListNode}
     */
    addTwoNumbers: function (l1, l2) {
        let result = new ListNode();
        const head = result;
        let carry = 0;

        while (l1 || l2) {
            let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0);
            result.val = (sum + carry) % 10;
            carry = Math.floor((sum + carry) / 10);

            l1 = l1 ? l1.next : l1;
            l2 = l2 ? l2.next : l2;

            result.next =
                !l1 && !l2
                    ? carry != 0
                        ? new ListNode(carry, null)
                        : null
                    : new ListNode();
            result = result.next;
        }

        head.print();
    },
};
