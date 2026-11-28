// Reference: Elements of Programming, ch. 9, p. 165.

// Doc (es): Intercambia los dos rangos en sentidos opuestos hasta agotar uno.
// Doc (en): Swaps the two ranges in opposite directions until one is exhausted.
function reverse_swap_ranges_bounded<I extends MutableBidirectionalIterator, J extends MutableForwardIterator<ValueOf<I>>>(f0: I, l0: I, f1: J, l1: J): [I, J] {
    pre(() => is_bounded_range(f0, l0) && is_bounded_range(f1, l1),
        "Each pair of iterators must delimit a valid range.");
    const n = Math.min(distance(f0, l0), distance(f1, l1));
    return reverse_swap_ranges_n(l0, f1, n);
}

function __reverse_swap_ranges_bounded_usage() {
    const left = seq([1, 2, 3, 4]);
    const right = seq([5, 6, 7]);
    const [f0, l0] = rng(left);
    const [f1, l1] = rng(right);
    reverse_swap_ranges_bounded(f0, l0, f1, l1);
    print(left);
    print(right);
}

function __reverse_swap_ranges_bounded_attributes() {
}
