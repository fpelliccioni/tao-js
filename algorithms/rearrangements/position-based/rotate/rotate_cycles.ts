// Reference: Elements of Programming, ch. 10, pp. 178–179.

// Doc (es): Rota un rango por ciclos disjuntos. El máximo común divisor de los tamaños de los bloques determina cuántos ciclos recorrer.
// Doc (en): Rotates a range through disjoint cycles. The greatest common divisor of the block lengths determines how many cycles to traverse.
function rotate_cycles<I extends MutableRandomAccessIterator>(f: I, m: I, l: I, sourceFor: Transformation<I>): I {
    let expected!: ValueOf<I>[];
    pre(() => {
        if (!is_bounded_range(f, m) || !is_bounded_range(m, l)) return false;
        const left = distance(f, m);
        const n = distance(f, l);
        for (let i = 0; i < n; ++i) {
            if (!equal(sourceFor(successor(f, i)), successor(f, (i + left) % n))) return false;
        }
        expected = range_snapshot(m, l).concat(range_snapshot(f, m));
        return true;
    }, "The range must be valid and the source mapping must describe its rotation.");

    const left = distance(f, m);
    const right = distance(m, l);
    if (left !== 0 && right !== 0) {
        for (let d = gcd(left, right); d > 0; --d) {
            cycle_from(successor(f, d - 1), sourceFor);
        }
    }
    const result = successor(f, right);
    post(() => range_matches_snapshot(f, l, expected), "The suffix must precede the original prefix.");
    return result;
}

function __rotate_cycles_usage() {
    const d = seq([1, 2, 3, 4, 5, 6]);
    const [f, l] = rng(d);
    const m = successor(f, 2);
    const sourceFor = k_rotate_from_permutation_indexed(f, m, l);
    rotate_cycles(f, m, l, sourceFor);
    print(d);
}

function __rotate_cycles_attributes() {
}
