#include <cstddef>
#include <iostream>

int main() {
    int sum{0};
    int n{10};

    for (size_t i{1}; i <= 10; i++) {
        sum += i;
    }

    std::cout << "La suma es: " << sum << "\n";
}
