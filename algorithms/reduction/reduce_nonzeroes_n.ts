// Reference: Elements of Programming, ch. 6, p. 99, exercise 6.3.

function reduce_nonzeroes_n<I extends Iter<unknown>>(
    f: I, n: number, op: Operation<ValueOf<I>>, z: ValueOf<I>,
): ValueOf<I> {
    pre(() => Number.isSafeInteger(n) && n >= 0, "The count must be a nonnegative safe integer.");

    let result;
    do {
        if (n === 0) return z;
        result = source(f);
        f = successor(f);
        --n;
    } while (result === z);

    while (n !== 0) {
        const value = source(f);
        if (value !== z) result = op(result, value);
        f = successor(f);
        --n;
    }
    return result;
}

function __reduce_nonzeroes_n_usage() {
    const d = sequence([0, 2, 0, 4, 0, 8]);
    const sum = reduce_nonzeroes_n(begin(d), 5, add, 0);
    print("Sum of the first five elements after skipping zeroes: " + sum);
}

function __reduce_nonzeroes_n_attributes() {
}
