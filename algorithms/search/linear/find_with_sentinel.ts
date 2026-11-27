// Reference: Elements of Programming, ch. 6, p. 99 (sentinel technique; lab adaptation).

function find_with_sentinel<I extends BidirectionalIterator>(f: I, l: I, x: ValueOf<I>): I {
    // Precondition: equality is reflexive for x.
    if (equal(f, l)) return l;

    const last = predecessor(l);
    const saved = source(last);
    sink(last, x);
    const result = find_if_unguarded(f, value => value === x);
    sink(last, saved);

    if (equal(result, last) && saved !== x) return l;
    return result;
}

function __find_with_sentinel_usage() {
    const d = sequence([3, 7, 4, 9]);
    const f = begin(d);
    const l = end(d);
    const target = 7;
    const found = find_with_sentinel(f, l, target);
    const missing = find_with_sentinel(f, l, 5);
    const index = distance(f, found);
    const notFound = equal(missing, l);

    print("Index of 7: " + index);
    print("5 is absent: " + notFound);
}

function __find_with_sentinel_attributes() {
}
