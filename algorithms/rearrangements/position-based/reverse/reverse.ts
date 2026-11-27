// Reference: Elements of Programming, ch. 10, p. 173 (bidirectional implementation).

function reverse<T>(f: Iter<T>, l: Iter<T>) {
    while (true) {
        if (equal(f, l)) return;
        l = predecessor(l);
        if (equal(f, l)) return;
        iter_swap(f, l);
        f = successor(f);
    }
}

function __reverse_usage() {
    const s = sequence(array_random(), "s1");
    print(s);
    reverse(begin(s), end(s));
    print(s);
    print('...');
}

function __reverse_attributes() {
}
