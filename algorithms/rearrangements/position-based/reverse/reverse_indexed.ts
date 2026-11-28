// Reference: Elements of Programming, ch. 10, p. 183.

// Doc (es): Invierte un rango usando desplazamientos desde su inicio.
// Doc (en): Reverses a range using offsets from its beginning.
function reverse_indexed<I extends MutableRandomAccessIterator>(f: I, l: I): void {
    let expected!: ValueOf<I>[];
    pre(() => {
        if (!is_bounded_range(f, l)) return false;
        expected = range_snapshot(f, l).reverse();
        return true;
    }, "The iterators must delimit a valid range.");
    reverse_n_indexed(f, distance(f, l));
    post(() => range_matches_snapshot(f, l, expected), "The range must be reversed.");
}

function __reverse_indexed_usage() {
    const d = seq([1, 2, 3, 4, 5]);
    const [f, l] = rng(d);
    reverse_indexed(f, l);
    print(d);
}

function __reverse_indexed_attributes() {
}
