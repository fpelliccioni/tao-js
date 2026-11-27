function find_if_not<T>(f: Iter<T>, l: Iter<T>, p: Predicate<T>) {
    while ( ! equal(f, l) && p(source(f))) {
        f = successor(f)
    }
    return f;
}

function __find_if_not_usage() {
    const even = predicate<number>(x => (x & 1) === 0);
    const d = sequence(array_random(), "d");
    const f = begin(d);
    const l = end(d);

    const it = find_if_not(f, l, even);
    if ( ! equal(it, l)) {
        print(source(it));
    }

}

function __find_if_not_attributes() {
}
