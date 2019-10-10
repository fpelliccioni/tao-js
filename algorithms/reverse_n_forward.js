function half_nonnegative(n) {return n >> 1;}

function twice(n) {return n + n;}

function swap_ranges_n(f0, f1, n) {
    while (n != 0) {
        iter_swap(f0, f1);
        f0 = successor(f0);
        f1 = successor(f1);
        --n;
    }
    return [f0, f1];
}

function reverse_n_forward(f, n) {
    if (n < 2) return successor(f, n);
    var h = half_nonnegative(n);
    var n_mod_2 = n - twice(h);

    var m = successor(reverse_n_forward(f, h), n_mod_2);
    var l = reverse_n_forward(m, h);

    swap_ranges_n(f, m, h);
    return l;
}

function usage() {
    var s = sequence(array_random(), "s1");
    print(s);
    var r = reverse_n_forward(begin(s), size(s));
    print(s);
    print('...');
}

function attributes() {

}
