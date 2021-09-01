#include <algorithm>
#include <vector>
#include <iostream>

using namespace std;

int main() {
    vector v = {10, 8, 6, 4, 5, 3, 7};
    auto i = is_heap_until(begin(v), end(v));
    cout << distance(begin(v), end(v)) << endl;
    cout << distance(begin(v), i) << endl;
}