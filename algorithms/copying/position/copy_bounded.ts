// Reference: Elements of Programming, ch. 9, p. 151.

function copy_bounded<T, U>(f: Iter<T>, l: Iter<T>, fo: Iter<U>, lo: Iter<U>): [Iter<T>, Iter<U>] {
    while ( ! equal(f, l) && ! equal(fo, lo)) {
        sink(fo, source(f));
        fo = successor(fo);
        f = successor(f);
    }
    return [f, fo];
}

function __copy_bounded_usage() {
    const s = sequence(array_ascending());
    const z = sequence(array_descending());

    const res = copy_bounded(successor(begin(s), 5), end(s), begin(z), end(z));
    const f1 = res[0];
    const f2 = res[1];

    print(z);
}

function __copy_bounded_attributes() {
}
