function reverse_copy_backward_n<T, U>(f: Iter<T>, n: number, o: Iter<U>): [Iter<T>, Iter<U>] {
    while (n != 0) {
        o = predecessor(o);
        sink(o, source(f));
        f = successor(f);
        --n;
    }
    return [f, o];
}

function __reverse_copy_backward_n_usage() {
    const s = sequence(array_ascending(), "s");
    const z = sequence(array_descending(), "z");

    reverse_copy_backward_n(successor(begin(s), 5), 5, end(z));

    print(z);
}

function __reverse_copy_backward_n_attributes() {
}
