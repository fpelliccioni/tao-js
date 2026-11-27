function reverse_copy_backward<T, U>(f: Iter<T>, l: Iter<T>, o: Iter<U>) {
    while ( ! equal(f, l)) {
        o = predecessor(o);
        sink(o, source(f));
        f = successor(f);
    }
    return o;
}

function __reverse_copy_backward_usage() {
    const s = sequence(array_ascending(), "s");
    const z = sequence(array_descending(), "z");

    reverse_copy_backward(successor(begin(s), 5), end(s), end(z));

    print(z);
}

function __reverse_copy_backward_attributes() {
}
