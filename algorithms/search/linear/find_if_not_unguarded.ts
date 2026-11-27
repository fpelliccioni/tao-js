// Reference: Elements of Programming, ch. 6, p. 99.

// Doc (es): Avanza hasta el primer elemento que falla p. Debe existir uno alcanzable desde f.
// Doc (en): Advances to the first element that fails p. Such an element must be reachable from f.
function find_if_not_unguarded<I extends Iter<unknown>>(f: I, p: Predicate<ValueOf<I>>): I {
    // Precondition: there is a finite integer k >= 0 such that
    // p(source(successor(f, k))) is false.
    // Without an end iterator, this cannot be checked in general.
    while (p(source(f))) {
        f = successor(f);
    }
    return f;
}

function __find_if_not_unguarded_usage() {
    // The final element is the sentinel.
    const d = sequence([2, 4, 8, 7]);
    const result = find_if_not_unguarded(begin(d), even);
    const value = source(result);
    print("First odd element: " + value);
}

function __find_if_not_unguarded_attributes() {
}
