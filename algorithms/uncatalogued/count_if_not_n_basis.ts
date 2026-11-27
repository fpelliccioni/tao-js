// Reference: Elements of Programming, ch. 6, p. 99, exercise 6.3 (explicit accumulator).

function count_if_not_n_basis<I extends Iter<unknown>, J extends number | Iter<unknown>>(
    f: I, n: number, p: Predicate<ValueOf<I>>, j: J,
): J {
    return count_if_n_basis(f, n, value => !p(value), j);
}

function __count_if_not_n_basis_usage() {
    const d = sequence([2, 4, 7, 8, 9]);
    const positions = sequence([0, 1, 2, 3, 4]);
    const start = begin(positions);
    const result = count_if_not_n_basis(begin(d), 4, even, start);
    const count = distance(start, result);
    print("Odd elements among the first four: " + count);
}

function __count_if_not_n_basis_attributes() {
}
