// Reference: Elements of Programming, ch. 10, p. 183.

// Doc (es): Rota el rango guardando primero el sufijo en un búfer separado.
// Doc (en): Rotates the range by first saving the suffix in a separate buffer.
function rotate_with_buffer_backward_nontrivial<I extends MutableBidirectionalIterator, B extends MutableForwardIterator<ValueOf<I>>>(f: I, m: I, l: I, buffer: B): I {
    pre(() => is_bounded_range(f, m) && is_bounded_range(m, l)
        && !equal(f, m) && !equal(m, l), "Both parts must be nonempty and belong to the same range.");
    let expected!: ValueOf<I>[];
    pre(() => {
        const n = distance(f, l);
        successor(buffer, n);
        if (!disjoint_counted_ranges(f, n, buffer, n)) return false;
        expected = range_snapshot(m, l).concat(range_snapshot(f, m));
        return true;
    }, "The buffer must be separate and have room for the entire range.");

    const bufferEnd = copy(m, l, buffer);
    copy_backward(f, m, l);
    const result = copy(buffer, bufferEnd, f);
    post(() => equal(result, successor(f, distance(m, l))), "The result must mark the end of the moved suffix.");
    post(() => range_matches_snapshot(f, l, expected), "The suffix must precede the original prefix.");
    return result;
}

function __rotate_with_buffer_backward_nontrivial_usage() {
    const d = seq([1, 2, 3, 4, 5]);
    const [f, l] = rng(d);
    const m = successor(f, 2);
    const buffer = seq([0, 0, 0, 0, 0]);
    rotate_with_buffer_backward_nontrivial(f, m, l, begin(buffer));
    print(d);
}

function __rotate_with_buffer_backward_nontrivial_attributes() {
}
