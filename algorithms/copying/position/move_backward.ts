function move_backward<T, U>(f: Iter<T>, l: Iter<T>, o: Iter<U>) {
    while (! equal(f, l)) {
        l = predecessor(l);
        o = predecessor(o);
        sink_move(o, source(l));
    }
    return o;
}

function __move_backward_usage() {
    const s = seq(array_ascending());
    const z = seq(array_descending());

    move_backward(successor(begin(s), 5), end(s), end(z));

    print(z);
}

function __move_backward_attributes() {
}
