function fill<T>(f: Iter<T>, l: Iter<T>, x: T) {
    while ( ! equal(f, l)) {
        sink(f, x);
        f = successor(f);
    }
}

function __fill_usage() {
    const s = sequence(array_all_equal(10, "-"), "s");
    fill(begin(s), end(s), '?');
    print(s);
}

function __fill_attributes() {
}
