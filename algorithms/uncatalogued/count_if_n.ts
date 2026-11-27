// Reference: Elements of Programming, ch. 6, p. 99, exercise 6.3.

function count_if_n<I extends Iter<unknown>>(f: I, n: number, p: Predicate<ValueOf<I>>): number {
    pre(() => Number.isSafeInteger(n) && n >= 0, "The count must be a nonnegative safe integer.");

    let count = 0;
    while (n !== 0) {
        if (p(source(f))) ++count;
        f = successor(f);
        --n;
    }
    return count;
}

function __count_if_n_usage() {
    const d = sequence([2, 3, 4, 7, 8]);
    const count = count_if_n(begin(d), 4, even);
    print("Even elements among the first four: " + count);
}

function __count_if_n_attributes() {
}
