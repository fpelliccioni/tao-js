// Reference: From Mathematics to Generic Programming, ch. 11, §11.3, pp. 204–208 (ch11.h).

// Doc (es): Rota por intercambios de bloques, reduciendo el bloque más grande en cada paso.
// Doc (en): Rotates by swapping blocks and reducing the larger block at each step.
function gries_mills_rotate<I extends MutableForwardIterator>(f: I, m: I, l: I): void {
    let expected!: ValueOf<I>[];
    pre(() => {
        if (!is_bounded_range(f, m) || !is_bounded_range(m, l)) return false;
        expected = range_snapshot(m, l).concat(range_snapshot(f, m));
        return true;
    }, "The middle must lie within the range.");
    let first = f;
    let middle = m;
    while (!equal(first, middle) && !equal(middle, l)) {
        const [nextFirst, nextSecond] = swap_ranges_bounded(first, middle, middle, l);
        if (equal(nextFirst, middle) && equal(nextSecond, l)) break;
        if (equal(nextFirst, middle)) {
            first = middle;
            middle = nextSecond;
        } else {
            first = nextFirst;
        }
    }
    post(() => range_matches_snapshot(f, l, expected), "The suffix must precede the original prefix.");
}

function __gries_mills_rotate_usage() {
    const d = seq([1, 2, 3, 4, 5], "d", undefined, "sll");
    const [f, l] = rng(d);
    const m = successor(f, 2);
    gries_mills_rotate(f, m, l);
    print(d);
}

function __gries_mills_rotate_attributes() {
}
