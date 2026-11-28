// Reference: From Mathematics to Generic Programming, ch. 11, §11.5, pp. 212–215 (ch11.h).

// Doc (es): Rota un rango invirtiendo sus dos mitades y luego el rango completo.
// Doc (en): Rotates a range by reversing both parts and then reversing the entire range.
function three_reverse_rotate<I extends MutableBidirectionalIterator>(f: I, m: I, l: I): void {
    let expected!: ValueOf<I>[];
    pre(() => {
        if (!is_bounded_range(f, m) || !is_bounded_range(m, l)) return false;
        expected = range_snapshot(m, l).concat(range_snapshot(f, m));
        return true;
    }, "The middle must lie within the range.");
    reverse_bidirectional(f, m);
    reverse_bidirectional(m, l);
    reverse_bidirectional(f, l);
    post(() => range_matches_snapshot(f, l, expected), "The suffix must precede the original prefix.");
}

function __three_reverse_rotate_usage() {
    const d = seq([1, 2, 3, 4, 5]);
    const [f, l] = rng(d);
    const m = successor(f, 2);
    three_reverse_rotate(f, m, l);
    print(d);
}

function __three_reverse_rotate_attributes() {
}
