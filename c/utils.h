

#ifndef UTILS_H
#define UTILS_H
#include <iostream>
#include <unordered_map>
#include <vector>

template <typename T, typename U> void printMap(std::unordered_map<T, U> map) {
    for (auto& [key, value] : map) {
        std::cout << key << ": " << value << "\n";
    }
}

template <typename T> void printVector(std::vector<T> vec) {
    for (auto el : vec) {
        std::cout << el << "\n";
    }
}

#endif // !UTILS_H
