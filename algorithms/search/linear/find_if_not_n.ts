// Reference: Elements of Programming, ch. 6, p. 99, exercise 6.3.

function find_if_not_n<I extends Iter<unknown>>(
    f: I, n: number, p: Predicate<ValueOf<I>>,
): [I, number] {
    return find_if_n(f, n, value => !p(value));
}

function __find_if_not_n_usage() {
    const even = predicate(x => (x & 1) === 0);
    const d = sequence([2, 4, 7, 8]);
    const [result, remaining] = find_if_not_n(begin(d), size(d), even);
    if (remaining === 0) {
        print("No odd element.");
    } else {
        const value = source(result);
        print("First odd element: " + value);
    }
}

function __find_if_not_n_attributes() {
}
