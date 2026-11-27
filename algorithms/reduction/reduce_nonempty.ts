// Reference: Elements of Programming, ch. 6, pp. 96–97 (value-based overload in eop.h).

function reduce_nonempty<I extends Iter<unknown>>(
    f: I, l: I, op: Operation<ValueOf<I>>,
): ValueOf<I> {
    pre(() => !equal(f, l), "The range must not be empty.");

    let result = source(f);
    f = successor(f);
    while (!equal(f, l)) {
        result = op(result, source(f));
        f = successor(f);
    }
    return result;
}

function __reduce_nonempty_usage() {
    const d = sequence([2, 3, 4], "d", undefined, "stream");
    print("Product: " + reduce_nonempty(begin(d), end(d), multiply));
}

function __reduce_nonempty_attributes() {
}
