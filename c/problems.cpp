#include <array>
#include <cstddef>
#include <limits>
#include <string>
#include <string_view>
#include <unordered_map>
#include <unordered_set>

int countVocals(std::string_view str) {
    std::array<char, 5> vocals{'a', 'e', 'i', 'o', 'u'};
    int                 count{0};

    for (char ch : str) {
        switch (ch) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                count++;
        }
    }
    return count;
}

int isPalindrome(std::string_view str, int i, int j) {
    int start = i;
    int end   = j - 1;

    while (start < end) {
        if (str[start] != str[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}

std::string_view longestPalindrome(std::string_view str) {
    for (size_t i{str.length()}; i > 0; i--) {
        for (size_t start{0}; start <= str.length() - i; start++) {
            if (isPalindrome(str, start, start + i)) {
                return str.substr(start, i);
            }
        }
    }

    return {};
}

std::unordered_map<char, int> countRepeated(std::string_view str) {
    std::unordered_map<char, int> map{};

    for (char ch : str) {
        map[ch]++;
    }

    return map;
}

std::string_view minimunSubstring(std::string_view str, std::string_view substr) {
    if (substr.length() == 0 || str.length() < substr.length()) {
        return "";
    }

    std::unordered_map<char, int> need{};

    for (auto ch : substr) {
        need[ch]++;
    }

    std::unordered_map<char, int> window{};

    size_t required{need.size()};
    int    formed{0};

    size_t start{0};
    int    bestLen{std::numeric_limits<int>::max()};
    size_t bestStart{0};

    for (size_t right = 0; right < str.length(); right++) {
        char ch{str[right]};
        window[ch]++;

        if (need.find(ch) != need.end() && window[ch] == need[ch]) {
            formed++;
        }

        while (required == formed) {
            if (right - start + 1 < bestLen) {
                bestLen   = right - start + 1;
                bestStart = start;
            }

            char leftCh = str[start];

            window[leftCh]--;

            if (need.find(leftCh) != need.end() && window[leftCh] < need[leftCh]) {
                formed--;
            }

            start++;
        }
    }

    return bestLen == std::numeric_limits<int>::max() ? "" : str.substr(bestStart, bestLen);
}

std::string_view longestSubstring(std::string_view str) {
    std::unordered_set<char> window{};

    size_t start{};
    size_t bestStart{};
    size_t bestLen{};

    for (size_t rigth = 0; rigth < str.length(); rigth++) {
        char ch = str[rigth];

        while (window.find(ch) != window.end()) {
            window.erase(str[start]);
            start++;
        }

        window.insert(ch);

        if (rigth - start + 1 > bestLen) {
            bestLen   = rigth - start + 1;
            bestStart = start;
        }
    }

    return str.substr(bestStart, bestLen);
}
