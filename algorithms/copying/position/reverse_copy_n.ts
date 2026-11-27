function reverse_copy_n<T, U>(l: Iter<T>, n: number, o: Iter<U>): [Iter<T>, Iter<U>] {
    while (n != 0) {
        l = predecessor(l);
        sink(o, source(l));
        o = successor(o);
        --n;
    }
    return [l, o];
}

function __reverse_copy_n_usage() {
    const s = sequence(array_ascending(), "s");
    const z = sequence(array_descending(), "z");

    reverse_copy_n(successor(begin(s), 5), 5, begin(z));

    print(z);
}

function __reverse_copy_n_attributes() {
}
