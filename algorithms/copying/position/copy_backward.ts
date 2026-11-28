// Reference: Elements of Programming, ch. 9, p. 153.

function copy_backward<T, U>(f: Iter<T>, l: Iter<T>, o: Iter<U>) {
    while ( ! equal(f, l)) {
        l = predecessor(l);
        o = predecessor(o);
        sink(o, source(l));
    }
    return o;
}

function __copy_backward_usage() {
    const s = seq(array_ascending());
    const z = seq(array_descending());

    copy_backward(successor(begin(s), 5), end(s), end(z));

    print(z);
}

function __copy_backward_attributes() {
}
