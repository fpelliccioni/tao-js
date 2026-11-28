// Reference: Elements of Programming, ch. 9, p. 154.
// Reference: From Mathematics to Generic Programming, ch. 11, p. 216 (ch11.h).

function reverse_copy<T, U>(f: Iter<T>, l: Iter<T>, o: Iter<U>) {
    while ( ! equal(f, l)) {
        l = predecessor(l);
        sink(o, source(l));
        o = successor(o);
    }
    return o;
}

function __reverse_copy_usage() {
    const s = seq(array_ascending());
    const z = seq(array_descending());

    reverse_copy(successor(begin(s), 5), end(s), begin(z));

    print(z);
}

function __reverse_copy_attributes() {
}
