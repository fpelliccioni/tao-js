// Reference: Elements of Programming, ch. 9, p. 152.

function copy_n<I extends Iter<unknown>, O extends Iter<unknown>>(f: I, n: number, o: O): [I, O] {
    while (n != 0) {
        sink(o, source(f));
        f = successor(f);
        o = successor(o);
        --n;
    }
    return [f, o];
}

function __copy_n_usage() {
    const s = seq(array_ascending());
    const z = seq(array_descending());

    copy_n(begin(s), 5, begin(z));

    print(z);
}

function __copy_n_attributes() {
}
