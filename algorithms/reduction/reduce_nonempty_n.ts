// Reference: Elements of Programming, ch. 6, p. 99, exercise 6.3.

function reduce_nonempty_n<I extends Iter<unknown>>(
    f: I, n: number, op: Operation<ValueOf<I>>,
): ValueOf<I> {
    pre(() => Number.isSafeInteger(n) && n > 0, "The count must be a positive safe integer.");

    let result = source(f);
    while (n > 1) {
        f = successor(f);
        result = op(result, source(f));
        --n;
    }
    return result;
}

function __reduce_nonempty_n_usage() {
    const d = sequence([2, 3, 4, 7], "d", undefined, "stream");
    const product = reduce_nonempty_n(begin(d), 3, multiply);
    print("Product of the first three elements: " + product);
}

function __reduce_nonempty_n_attributes() {
}
