// Reference: Elements of Programming, ch. 6, p. 99, exercise 6.3.

function count_if_not_n<I extends Iter<unknown>>(f: I, n: number, p: Predicate<ValueOf<I>>): number {
    return count_if_not_n_basis(f, n, p, 0);
}

function __count_if_not_n_usage() {
    const d = sequence([2, 3, 4, 7, 9]);
    const count = count_if_not_n(begin(d), 4, even);
    print("Odd elements among the first four: " + count);
}

function __count_if_not_n_attributes() {
}
