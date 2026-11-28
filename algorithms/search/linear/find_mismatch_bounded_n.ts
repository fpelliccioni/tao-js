// Reference: Elements of Programming, ch. 6, p. 100, exercise 6.5.

// Doc (es): Compara un rango con fin explícito y otro contado. Devuelve las dos posiciones al detenerse y el conteo restante del segundo rango.
// Doc (en): Compares a bounded range with a counted range. Returns both stopping positions and the remaining count of the second range.
function find_mismatch_bounded_n<I extends Iter<unknown>, J extends Iter<ValueOf<I>>>(
    f0: I, l0: I, f1: J, n1: number, r: Relation<ValueOf<I>>,
): [left: I, right: J, remainingRight: number] {
    pre(() => Number.isSafeInteger(n1) && n1 >= 0, "Counts must be nonnegative safe integers.");

    while (!equal(f0, l0) && n1 !== 0 && r(source(f0), source(f1))) {
        f0 = successor(f0);
        f1 = successor(f1);
        --n1;
    }
    return [f0, f1, n1];
}

function __find_mismatch_bounded_n_usage() {
    const left = seq([2, 4, 6, 8]);
    const right = seq([2, 4, 7]);
    // Compare only the first two elements of the right range.
    const [a, b, remainingRight] = find_mismatch_bounded_n(begin(left), end(left), begin(right), 2, eq);

    if (equal(a, end(left)) || remainingRight === 0) {
        print("No mismatch in the common prefix.");
    } else {
        const leftValue = source(a);
        const rightValue = source(b);
        print("First mismatch: " + leftValue + " and " + rightValue);
    }
}

function __find_mismatch_bounded_n_attributes() {
}
