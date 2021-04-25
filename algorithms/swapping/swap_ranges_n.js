function swap_ranges_n(f0, f1, n) {
    while (n != 0) {
        iter_swap(f0, f1);
        f0 = successor(f0);
        f1 = successor(f1);
        --n;
    }
    return [f0, f1];
}

function usage() {
    var s1 = sequence(array_random(), "s1");
    var s2 = sequence(array_random(5), "s2");
    
    var r = swap_ranges_n(begin(s1), begin(s2), 5);
    var f0 = r[0];
    var f1 = r[1];
    print('...');
}

function attributes() {

}

