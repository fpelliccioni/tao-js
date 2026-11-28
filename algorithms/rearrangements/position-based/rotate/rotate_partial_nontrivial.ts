// Reference: Elements of Programming, ch. 10, p. 182.

// Doc (es): Mueve el sufijo al inicio y conserva los elementos del prefijo en el resto del rango, donde pueden cambiar de orden.
// Doc (en): Moves the suffix to the front and preserves the prefix elements in the remainder, where their order may change.
function rotate_partial_nontrivial<I extends MutableForwardIterator>(f: I, m: I, l: I): I {
    pre(() => is_bounded_range(f, m) && is_bounded_range(m, l)
        && !equal(f, m) && !equal(m, l), "Both parts must be nonempty and belong to the same range.");
    let suffix!: ValueOf<I>[];
    let prefix!: Map<ValueOf<I>, number>;
    pre(() => {
        suffix = range_snapshot(m, l);
        prefix = range_value_counts(f, m);
        return true;
    });
    const result = swap_ranges(m, l, f);
    post(() => equal(result, successor(f, suffix.length)), "The result must mark the end of the moved suffix.");
    post(() => range_matches_snapshot(f, result, suffix) && has_range_value_counts(result, l, prefix),
        "The suffix must keep its order and the remaining values must come from the original prefix.");
    return result;
}

function __rotate_partial_nontrivial_usage() {
    const d = seq([1, 2, 3, 4, 5], "d", undefined, "sll");
    const [f, l] = rng(d);
    const m = successor(f, 2);
    rotate_partial_nontrivial(f, m, l);
    print(d);
}

function __rotate_partial_nontrivial_attributes() {
}
