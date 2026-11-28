// Reference: Elements of Programming, ch. 9, p. 165.

// Doc (es): Intercambia n elementos desde el fin del primer rango y el inicio del segundo, avanzando en sentidos opuestos.
// Doc (en): Swaps n elements from the end of the first range and the beginning of the second, traversing in opposite directions.
function reverse_swap_ranges_n<I extends MutableBidirectionalIterator, J extends MutableForwardIterator<ValueOf<I>>>(l0: I, f1: J, n: number): [I, J] {
    pre(() => Number.isSafeInteger(n) && n >= 0, "The swap count must be a nonnegative safe integer.");
    let first!: I;
    let last!: J;
    let left!: ValueOf<I>[];
    let right!: ValueOf<J>[];
    pre(() => {
        first = predecessor(l0, n);
        last = successor(f1, n);
        if (!disjoint_counted_ranges(first, n, f1, n)) return false;
        left = range_snapshot(first, l0).reverse();
        right = range_snapshot(f1, last).reverse();
        return true;
    }, "The two counted ranges must exist and be disjoint.");

    let back = l0;
    let front = f1;
    for (let i = 0; i < n; ++i) {
        back = predecessor(back);
        iter_swap(back, front);
        front = successor(front);
    }
    post(() => equal(back, first) && equal(front, last), "The iterators must advance by the swap count.");
    post(() => range_matches_snapshot(first, l0, right) && range_matches_snapshot(f1, last, left),
        "The exchanged ranges must appear in reverse order.");
    return [back, front];
}

function __reverse_swap_ranges_n_usage() {
    const left = seq([1, 2, 3, 4]);
    const right = seq([5, 6, 7]);
    const l = end(left);
    reverse_swap_ranges_n(l, begin(right), 2);
    print(left);
    print(right);
}

function __reverse_swap_ranges_n_attributes() {
}
