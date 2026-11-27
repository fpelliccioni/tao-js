// Reference: Elements of Programming, ch. 9, p. 153 (counted variant in eop.h).

function copy_backward_n<T, U>(l: Iter<T>, n: number, o: Iter<U>): [Iter<T>, Iter<U>] {
    while (n != 0) {
        l = predecessor(l);
        o = predecessor(o);
        --n;
        sink(o, source(l));
    }
    return [l, o];
}

function __copy_backward_n_usage() {
    const s = sequence(array_ascending(), "s");
    const z = sequence(array_descending(), "z");

    copy_backward_n(end(s), 5, end(z));

    print(z);
}

function __copy_backward_n_attributes() {
}
