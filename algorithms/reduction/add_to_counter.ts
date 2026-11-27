// Reference: Elements of Programming, ch. 11, p. 196.

function add_to_counter<I extends ForwardIterator>(
    f: I, l: I, op: Operation<ValueOf<I>>, x: ValueOf<I>, z: ValueOf<I>,
): ValueOf<I> {
    if (x === z) return z;

    while (!equal(f, l)) {
        const current = source(f);
        if (current === z) {
            sink(f, x);
            return z;
        }
        x = op(current, x);
        sink(f, z);
        f = successor(f);
    }
    return x;
}

function __add_to_counter_usage() {
    const slots = sequence([1, 5, 0]);
    add_to_counter(begin(slots), end(slots), add, 4, 0);
    print(slots);
}

function __add_to_counter_attributes() {
}
