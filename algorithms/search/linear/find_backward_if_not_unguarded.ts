// Reference: Elements of Programming, ch. 11, p. 192 (used by the sentinel partition in eop.h).

function find_backward_if_not_unguarded<I extends BidirectionalIterator>(
    l: I, p: Predicate<ValueOf<I>>,
): I {
    // Precondition: there is a finite integer k > 0 such that
    // p(source(predecessor(l, k))) is false.
    do {
        l = predecessor(l);
    } while (p(source(l)));

    post(() => !p(source(l)), "The result must point to an element that fails the predicate.");
    return l;
}

function __find_backward_if_not_unguarded_usage() {
    const d = sequence([1, 7, 4, 8]);
    const result = find_backward_if_not_unguarded(end(d), even);
    const value = source(result);
    print("Last odd element: " + value);
}

function __find_backward_if_not_unguarded_attributes() {
}
