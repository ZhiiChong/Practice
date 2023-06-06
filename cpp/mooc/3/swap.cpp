#include <iostream>
using std::cout;
using std::endl;

// pass by value
void swap1(int x, int y) {
    int t;
    t = x; 
    x = y; 
    y = t;
}

//pass by pointer
void swap2(int* x, int* y) {
    int t;
    t = *x;
    *x = *y;
    *y = t;
}

//pass by reference
void swap3(int& x, int& y) {
    int t;
    t = x;
    x = y;
    y = t;
}

int main() {
    int a = 5, b = 10;
    cout << "Before: a=" << a << " b=" << b << endl;
    swap1( a, b );
    cout << "After: a=" << a << " b=" << b << endl;
    int c = 5, d = 10;
    cout << "Before: c=" << c << " d=" << d << endl;
    swap2( &c, &d );
    cout << "After: c=" << c << " d=" << d << endl;
    int e{5}, f{10};
    cout << "Before: e=" << e << " f=" << f << endl;
    swap3( e, f );
    cout << "After: e=" << e << " f=" << f << endl;
    return 0;
}