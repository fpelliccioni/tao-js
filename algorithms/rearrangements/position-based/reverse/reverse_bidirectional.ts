// Reference: Elements of Programming, ch. 10, p. 173 (bidirectional implementation).

function reverse_bidirectional<T>(f: Iter<T>, l: Iter<T>) {
    while (true) {
        if (equal(f, l)) return;
        l = predecessor(l);
        if (equal(f, l)) return;
        iter_swap(f, l);
        f = successor(f);
    }
}

function __reverse_bidirectional_usage() {
    const s = seq(array_random(), "s1");
    reverse_bidirectional(begin(s), end(s));
    print(s);
}

function __reverse_bidirectional_attributes() {
}
