// Reference: Elements of Programming, ch. 9, §9.2, pp. 150–155 (adapted from the counted implementation in eop.h).

function fill_n<T>(f: Iter<T>, n: number, x: T) {
    while (n != 0) {
        sink(f, x);
        f = successor(f);
        --n;
    }
}

function __fill_n_usage() {
    const s = sequence(array_all_equal(10, "-"));
    fill_n(begin(s), size(s), '?');
    print(s);
}

function __fill_n_attributes() {
}
