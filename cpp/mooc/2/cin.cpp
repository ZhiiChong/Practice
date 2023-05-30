#include <iostream>

using std::cin;
using std::cout;
using std::endl;

int main() {
    // 获取键盘输入
    int x = 0;
    x = cin.get();
    char c = static_cast<char>(x);
    cout << "Input:" << c << endl;
    return 0;

}
