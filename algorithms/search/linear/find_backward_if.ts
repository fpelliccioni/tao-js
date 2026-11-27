// Reference: Elements of Programming, ch. 6, p. 108.

function find_backward_if<T>(f: Iter<T>, l: Iter<T>, p: Predicate<T>) {
    while (true) {
        if (equal(l, f)) return f;
        l = predecessor(l);
        if (p(source(l))) return successor(l);
    }
}

function __find_backward_if_usage() {
    const even = predicate(x => (x & 1) === 0);
    const d = sequence(array_random(), "d");
    const f = begin(d);
    const l = end(d);

    const it = find_backward_if(f, l, even);
    if ( ! equal(it, f)) {
        const value = source(predecessor(it));
        print(value);
    }


}

function __find_backward_if_attributes() {
}
