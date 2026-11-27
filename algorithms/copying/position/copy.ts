// Reference: Elements of Programming, ch. 9, p. 150.

function copy<T, U>(f: Iter<T>, l: Iter<T>, o: Iter<U>) {
    while ( ! equal(f, l)) {
        sink(o, source(f));
        o = successor(o);
        f = successor(f);
    }
    return o;
}

function __copy_usage() {
    const s = sequence(array_ascending(), "s");
    const z = sequence(array_descending(), "z");

    copy(successor(begin(s), 5), end(s), begin(z));

    print(z);
}

function __copy_attributes() {
}
