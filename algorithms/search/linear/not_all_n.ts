// Reference: Elements of Programming, ch. 6, p. 99, exercise 6.3.

function not_all_n<I extends Iter<unknown>>(f: I, n: number, p: Predicate<ValueOf<I>>): boolean {
    return !all_n(f, n, p);
}

function __not_all_n_usage() {
    const even = predicate(x => (x & 1) === 0);
    const d = sequence([2, 3, 6, 8]);
    const result = not_all_n(begin(d), 3, even);
    print("At least one of the first three elements is odd: " + result);
}

function __not_all_n_attributes() {
}
