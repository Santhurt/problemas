

#ifndef UTILS_H
#define UTILS_H
#include <iostream>
#include <unordered_map>

template <typename T, typename U> void printMap(std::unordered_map<T, U> map) {
    for (auto &[key, value] : map) {
        std::cout << key << ": " << value << "\n";
    }
}

#endif // !UTILS_H
