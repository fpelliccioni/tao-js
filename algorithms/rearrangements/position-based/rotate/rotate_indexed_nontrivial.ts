// Reference: Elements of Programming, ch. 10, p. 178.

// Doc (es): Rota un rango indexado por ciclos usando la permutación de orígenes.
// Doc (en): Rotates an indexed range by cycles using the source permutation.
function rotate_indexed_nontrivial<I extends MutableRandomAccessIterator>(f: I, m: I, l: I): I {
    pre(() => is_bounded_range(f, m) && is_bounded_range(m, l)
        && !equal(f, m) && !equal(m, l), "Both parts must be nonempty and belong to the same range.");
    const sourceFor = k_rotate_from_permutation_indexed(f, m, l);
    return rotate_cycles(f, m, l, sourceFor);
}

function __rotate_indexed_nontrivial_usage() {
    const d = seq([1, 2, 3, 4, 5]);
    const [f, l] = rng(d);
    const m = successor(f, 2);
    rotate_indexed_nontrivial(f, m, l);
    print(d);
}

function __rotate_indexed_nontrivial_attributes() {
}
