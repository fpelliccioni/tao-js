function copy_n<T, U>(f: Iter<T>, n: number, o: Iter<U>): [Iter<T>, Iter<U>] {
    while (n != 0) {
        sink(o, source(f));
        f = successor(f);
        o = successor(o);
        --n;
    }
    return [f, o];
}

function __copy_n_usage() {
    const s = sequence(array_ascending(), "s");
    const z = sequence(array_descending(), "z");

    copy_n(begin(s), 5, begin(z));

    print(z);
}

function __copy_n_attributes() {
}
