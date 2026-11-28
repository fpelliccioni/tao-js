// Reference: Elements of Programming, ch. 10, p. 180.

// Doc (es): Rota intercambiando bloques y muestra cómo disminuyen sus tamaños según el algoritmo de Euclides.
// Doc (en): Rotates by swapping blocks and shows how their lengths decrease as in Euclid’s algorithm.
function rotate_forward_annotated<I extends MutableForwardIterator>(f: I, m: I, l: I): void {
    pre(() => is_bounded_range(f, m) && is_bounded_range(m, l)
        && !equal(f, m) && !equal(m, l), "Both parts must be nonempty and belong to the same range.");
    let expected!: ValueOf<I>[];
    pre(() => {
        expected = range_snapshot(m, l).concat(range_snapshot(f, m));
        return true;
    });
    let first = f;
    let middle = m;
    let left = distance(f, m);
    let right = distance(m, l);
    while (true) {
        pre(() => left === distance(first, middle) && right === distance(middle, l),
            "The block counts must match the remaining ranges.");
        const [nextFirst, nextSecond] = swap_ranges_bounded(first, middle, middle, l);
        if (equal(nextFirst, middle) && equal(nextSecond, l)) break;
        first = nextFirst;
        if (equal(first, middle)) {
            middle = nextSecond;
            right -= left;
        } else {
            left -= right;
        }
    }
    post(() => range_matches_snapshot(f, l, expected), "The suffix must precede the original prefix.");
}

function __rotate_forward_annotated_usage() {
    const d = seq([1, 2, 3, 4, 5], "d", undefined, "sll");
    const [f, l] = rng(d);
    const m = successor(f, 2);
    rotate_forward_annotated(f, m, l);
    print(d);
}

function __rotate_forward_annotated_attributes() {
}
