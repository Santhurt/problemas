
#include "problems.h"
#include "utils.h"
#include <iostream>
#include <istream>
#include <string>
#include <unordered_map>
#include <vector>

void execCountVocals() {
    std::cout << "Ingrese una cadena\n";
    std::string str {};
    std::getline(std::cin >> std::ws, str);
    std::cout << "La cantidad de vocales es: " << countVocals(str) << "\n";
}

void execLongestPalindrome() {
    std::cout << "Ingrese una cadena\n";
    std::string str {};
    std::getline(std::cin >> std::ws, str);
    std::string result {longestPalindrome(str)};
    std::cout << "El palindromo mas largo es: " << result << "\n";
}

void execCountRepeated() {
    std::cout << "Ingrese una cadena\n";
    std::string str {};
    std::getline(std::cin >> std::ws, str);
    std::unordered_map<char, int> map {countRepeated(str)};
    printMap(map);
}

void execLongestSubstring() {
    std::cout << "Ingrese una cadena\n";
    std::string str {};
    std::getline(std::cin >> std::ws, str);
    std::string result {longestSubstring(str)};
    std::cout << result << "\n";
}

void execCheckInclusion() {
    std::cout << checkInclusion("ab", "eidbaooo") << "\n";
    std::cout << checkInclusion("ab", "eidboaoo") << "\n";
}

void execReverseInteger() {
    std::cout << reverseInteger(123) << "\n";
    std::cout << reverseInteger(-123) << "\n";
    std::cout << reverseInteger(230) << "\n";
    std::cout << reverseInteger(0) << "\n";
}

void execFindMaxAverage() {
    std::vector<int> nums {1, 12, -5, -6, 50, 3};
    double           result = findMaxAverage(nums, 4);
    std::cout << result << "\n";
}

int main(void) {
    std::cout << "Ingrese un problema: \n";
    int problem {};
    std::cin >> problem;

    switch (problem) {
    case 1:
        execCountVocals();
        break;
    case 2:
        execLongestPalindrome();
        break;
    case 3:
        execCountRepeated();
        break;
    case 4:
        execLongestSubstring();
        break;
    case 5:
        execCheckInclusion();
        break;
    case 6:
        execFindMaxAverage();
        break;
    case 7:
        execReverseInteger();
        break;
    default:
        std::cout << "Problema invalido";
        break;
    }

    return 0;
}
