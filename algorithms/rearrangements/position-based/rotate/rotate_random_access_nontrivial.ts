// Reference: Elements of Programming, ch. 10, p. 179.

// Doc (es): Rota un rango de acceso aleatorio por ciclos usando desplazamientos desde la posición actual.
// Doc (en): Rotates a random-access range by cycles, using offsets from the current position.
function rotate_random_access_nontrivial<I extends MutableRandomAccessIterator>(f: I, m: I, l: I): I {
    pre(() => is_bounded_range(f, m) && is_bounded_range(m, l)
        && !equal(f, m) && !equal(m, l), "Both parts must be nonempty and belong to the same range.");
    const sourceFor = k_rotate_from_permutation_random_access(f, m, l);
    return rotate_cycles(f, m, l, sourceFor);
}

function __rotate_random_access_nontrivial_usage() {
    const d = seq([1, 2, 3, 4, 5]);
    const [f, l] = rng(d);
    const m = successor(f, 2);
    rotate_random_access_nontrivial(f, m, l);
    print(d);
}

function __rotate_random_access_nontrivial_attributes() {
}
