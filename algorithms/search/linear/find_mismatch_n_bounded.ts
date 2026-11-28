// Reference: Elements of Programming, ch. 6, p. 100, exercise 6.5.

// Doc (es): Compara un rango contado y otro con fin explícito. Devuelve las dos posiciones al detenerse y el conteo restante del primer rango.
// Doc (en): Compares a counted range with a bounded range. Returns both stopping positions and the remaining count of the first range.
function find_mismatch_n_bounded<I extends Iter<unknown>, J extends Iter<ValueOf<I>>>(
    f0: I, n0: number, f1: J, l1: J, r: Relation<ValueOf<I>>,
): [left: I, right: J, remainingLeft: number] {
    pre(() => Number.isSafeInteger(n0) && n0 >= 0, "Counts must be nonnegative safe integers.");

    while (n0 !== 0 && !equal(f1, l1) && r(source(f0), source(f1))) {
        f0 = successor(f0);
        f1 = successor(f1);
        --n0;
    }
    return [f0, f1, n0];
}

function __find_mismatch_n_bounded_usage() {
    const left = seq([2, 4, 6, 8]);
    const right = seq([2, 4, 7]);
    const [a, b, remainingLeft] = find_mismatch_n_bounded(begin(left), size(left), begin(right), end(right), eq);

    if (remainingLeft === 0 || equal(b, end(right))) {
        print("No mismatch in the common prefix.");
    } else {
        const leftValue = source(a);
        const rightValue = source(b);
        print("First mismatch: " + leftValue + " and " + rightValue);
    }
}

function __find_mismatch_n_bounded_attributes() {
}
