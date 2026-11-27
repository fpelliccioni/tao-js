function copy_backward<T, U>(f: Iter<T>, l: Iter<T>, o: Iter<U>) {
    while ( ! equal(f, l)) {
        l = predecessor(l);
        o = predecessor(o);
        sink(o, source(l));
    }
    return o;
}

function __copy_backward_usage() {
    const s = sequence(array_ascending(), "s");
    const z = sequence(array_descending(), "z");

    copy_backward(successor(begin(s), 5), end(s), end(z));

    print(z);
}

function __copy_backward_attributes() {
}
