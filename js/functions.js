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
        let dummy = new ListNode();
        let tail = dummy;
        let carry = 0;

        while (l1 || l2 || carry) {
            let x = l1 ? l1.val : 0;
            let y = l2 ? l2.val : 0;

            let sum = x + y + carry;
            carry = Math.floor(sum / 10);

            let sumNode = new ListNode(sum % 10, null);
            tail.next = sumNode;

            tail = tail.next;
            l1 = l1 ? l1.next : l1;
            l2 = l2 ? l2.next : l2;
        }

        dummy.next.print();
    },
    checkInclusion: function (s1 = "", s2 = "") {
        let start = 0;
        let map = {};

        for (let end = 0; end < s2.length; end++) {
            let ch = s2;

            if (ch in map) {
                map[ch]++;
            }
        }
    },
};
