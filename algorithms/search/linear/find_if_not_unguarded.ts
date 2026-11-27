// Reference: Elements of Programming, ch. 6, p. 99.

function find_if_not_unguarded<I extends Iter<unknown>>(f: I, p: Predicate<ValueOf<I>>): I {
    // Precondition: an element reachable from f does not satisfy p.
    while (p(source(f))) {
        f = successor(f);
    }
    return f;
}

function __find_if_not_unguarded_usage() {
    const even = predicate(x => (x & 1) === 0);
    // The final element is the sentinel.
    const d = sequence([2, 4, 8, 7]);
    const result = find_if_not_unguarded(begin(d), even);
    const value = source(result);
    print("First odd element: " + value);
}

function __find_if_not_unguarded_attributes() {
}
