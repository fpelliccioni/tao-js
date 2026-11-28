// Reference: From Mathematics to Generic Programming, ch. 11, §11.3, p. 206 (ch11.h).

// Doc (es): Rota dos subrangos no vacíos usando intercambios de bloques.
// Doc (en): Rotates two nonempty subranges using block swaps.
function rotate_unguarded<I extends MutableForwardIterator>(f: I, m: I, l: I): void {
    let expected!: ValueOf<I>[];
    pre(() => {
        if (!is_bounded_range(f, m) || !is_bounded_range(m, l)) return false;
        expected = range_snapshot(m, l).concat(range_snapshot(f, m));
        return true;
    }, "The middle must lie within the range.");
    pre(() => !equal(f, m) && !equal(m, l), "Both parts must be nonempty.");
    let middle = m;
    let [first, second] = swap_ranges_bounded(f, middle, middle, l);
    while (!equal(first, middle) || !equal(second, l)) {
        if (equal(first, middle)) middle = second;
        [first, second] = swap_ranges_bounded(first, middle, middle, l);
    }
    post(() => range_matches_snapshot(f, l, expected), "The suffix must precede the original prefix.");
}

function __rotate_unguarded_usage() {
    const d = seq([1, 2, 3, 4, 5]);
    const [f, l] = rng(d);
    const m = successor(f, 2);
    rotate_unguarded(f, m, l);
    print(d);
}

function __rotate_unguarded_attributes() {
}
