// Reference: Elements of Programming, ch. 10, p. 173.

// Doc (es): Intercambia floor(n/2) pares desde los extremos del rango y conserva el centro.
// Doc (en): Swaps floor(n/2) pairs from the ends of the range, preserving the middle.
function reverse_n_bidirectional<I extends MutableBidirectionalIterator>(f: I, l: I, n: number): void {
    pre(() => Number.isSafeInteger(n) && n >= 0 && is_bounded_range(f, l) && n <= distance(f, l),
        "The count must fit in the range.");
    reverse_swap_ranges_n(l, f, Math.floor(n / 2));
}

function __reverse_n_bidirectional_usage() {
    const d = seq([1, 2, 3, 4, 5]);
    const [f, l] = rng(d);
    reverse_n_bidirectional(f, l, size(d));
    print(d);
}

function __reverse_n_bidirectional_attributes() {
}
