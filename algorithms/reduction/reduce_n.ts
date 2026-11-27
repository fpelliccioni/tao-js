// Reference: Elements of Programming, ch. 6, p. 99, exercise 6.3.

function reduce_n<I extends Iter<unknown>>(
    f: I, n: number, op: Operation<ValueOf<I>>, z: ValueOf<I>,
): ValueOf<I> {
    if (n === 0) return z;
    return reduce_nonempty_n(f, n, op);
}

function __reduce_n_usage() {
    const d = sequence([2, 3, 4, 7]);
    const product = reduce_n(begin(d), 3, multiply, 1);
    const empty = reduce_n(begin(d), 0, multiply, 1);
    print("Product: " + product + ". Empty range: " + empty + ".");
}

function __reduce_n_attributes() {
}
