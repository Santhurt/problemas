#include <iostream>

int main() {
    int* ptr {new int};
    *ptr = 7;

    delete ptr;

    std::cout << *ptr;

    return 0;
}
