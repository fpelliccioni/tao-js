// Reference: Elements of Programming, ch. 6, p. 99.

function find_if_unguarded<I extends Iter<unknown>>(f: I, p: Predicate<ValueOf<I>>): I {
    // Precondition: there is a finite integer k >= 0 such that
    // p(source(successor(f, k))) is true.
    // Without an end iterator, this cannot be checked in general.
    while (!p(source(f))) {
        f = successor(f);
    }
    return f;
}

function __find_if_unguarded_usage() {
    // The final element is the sentinel.
    const d = sequence([1, 3, 5, 8]);
    const result = find_if_unguarded(begin(d), even);
    const value = source(result);
    print("First even element: " + value);
}

function __find_if_unguarded_attributes() {
}
