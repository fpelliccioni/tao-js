function swap_ranges_n<T>(f0: Iter<T>, f1: Iter<T>, n: number) {
    while (n != 0) {
        iter_swap(f0, f1);
        f0 = successor(f0);
        f1 = successor(f1);
        --n;
    }
    return [f0, f1];
}

function __swap_ranges_n_usage() {
    const s1 = sequence(array_random(), "s1");
    const s2 = sequence(array_random(5), "s2");

    const r = swap_ranges_n(begin(s1), begin(s2), 5);
    const f0 = r[0];
    const f1 = r[1];
    print('...');
}

function __swap_ranges_n_attributes() {
}
