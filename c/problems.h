#ifndef VOWELS_H
#define VOWELS_H

#include <string_view>
#include <unordered_map>
int countVocals(std::string_view str);

std::string_view longestPalindrome(std::string_view str);

std::unordered_map<char, int> countRepeated(std::string_view str);

std::string_view longestSubstring(std::string_view str);

#endif // !VOWELS_H
