// Reference: Elements of Programming, ch. 6, p. 97 (value-based overload in eop.h).

function reduce<I extends Iter<unknown>>(
    f: I, l: I, op: Operation<ValueOf<I>>, z: ValueOf<I>,
): ValueOf<I> {
    if (equal(f, l)) return z;
    return reduce_nonempty(f, l, op);
}

function __reduce_usage() {
    const d = sequence([2, 3, 4]);
    const result = reduce(begin(d), end(d), multiply, 1);
    const empty = reduce(begin(d), begin(d), multiply, 1);
    print("Product: " + result + ". Empty range: " + empty + ".");
}

function __reduce_attributes() {
}
