// Reference: Elements of Programming, ch. 9, p. 165.

// Doc (es): Intercambia el primer rango, recorrido de atrás hacia adelante, con un prefijo del segundo.
// Doc (en): Swaps the first range, traversed backward, with a prefix of the second.
function reverse_swap_ranges<I extends MutableBidirectionalIterator, J extends MutableForwardIterator<ValueOf<I>>>(f0: I, l0: I, f1: J): J {
    pre(() => is_bounded_range(f0, l0), "The first iterators must delimit a valid range.");
    const n = distance(f0, l0);
    const [, result] = reverse_swap_ranges_n(l0, f1, n);
    return result;
}

function __reverse_swap_ranges_usage() {
    const left = seq([1, 2, 3, 4]);
    const [f, l] = rng(left);
    const target = seq([5, 6, 7, 8]);
    reverse_swap_ranges(f, l, begin(target));
    print(left);
    print(target);
}

function __reverse_swap_ranges_attributes() {
}
