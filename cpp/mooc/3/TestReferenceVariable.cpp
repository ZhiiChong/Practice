#include <iostream>
int main() {
    int x = 0;
    int y{ 10 };
    int& rx = x;

    rx = 8;
    std::cout << x << std::endl;

    const char* s = "Hello";
    const char* t = "World";

    const char* &r = s;
    r = t;
    std::cout << r << std::endl;
    std::cout << s << std::endl;

    
    return 0;
}