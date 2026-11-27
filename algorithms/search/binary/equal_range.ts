// Reference: Elements of Programming, ch. 6, p. 106, exercise 6.7.

function equal_range<I extends ForwardIterator>(
    f: I, n: number, a: ValueOf<I>, r: Relation<ValueOf<I>>,
): [I, I] {
    // Precondition: the counted range is sorted according to r.
    pre(() => Number.isSafeInteger(n) && n >= 0, "The count must be a nonnegative safe integer.");

    while (n !== 0) {
        const h = half(n);
        const m = successor(f, h);
        const value = source(m);
        if (r(value, a)) {
            f = successor(m);
            n -= h + 1;
        } else if (r(a, value)) {
            n = h;
        } else {
            const first = lower_bound_n(f, h, a, r);
            const last = upper_bound_n(successor(m), n - h - 1, a, r);
            return [first, last];
        }
    }
    return [f, f];
}

function __equal_range_usage() {
    const d = sequence([1, 2, 2, 2, 4, 7]);
    const f = begin(d);
    const [first, last] = equal_range(f, size(d), 2, lt);
    const from = distance(f, first);
    const to = distance(f, last);
    print("Matching indices: [" + from + ", " + to + ")");
}

function __equal_range_attributes() {
}
