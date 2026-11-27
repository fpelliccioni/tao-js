// Reference: Elements of Programming, ch. 6, p. 99, exercise 6.3 (explicit accumulator).

// Doc (es): Avanza el acumulador j una posición por cada elemento que cumple p en los primeros n. Devuelve j actualizado.
// Doc (en): Advances the accumulator j once per element satisfying p among the first n. Returns the updated accumulator.
function count_if_n_basis<I extends Iter<unknown>, J extends number | Iter<unknown>>(
    f: I, n: number, p: Predicate<ValueOf<I>>, j: J,
): J {
    pre(() => Number.isSafeInteger(n) && n >= 0, "The count must be a nonnegative safe integer.");

    while (n !== 0) {
        if (p(source(f))) j = successor(j);
        f = successor(f);
        --n;
    }
    return j;
}

function __count_if_n_basis_usage() {
    const d = sequence([2, 4, 7, 8, 9]);
    const positions = sequence([0, 1, 2, 3, 4]);
    const start = begin(positions);
    const result = count_if_n_basis(begin(d), 4, even, start);
    const count = distance(start, result);
    print("Even elements among the first four: " + count);
}

function __count_if_n_basis_attributes() {
}
