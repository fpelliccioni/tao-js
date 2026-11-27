// Reference: Elements of Programming, ch. 6, p. 99, exercise 6.3.

function none_n<I extends Iter<unknown>>(f: I, n: number, p: Predicate<ValueOf<I>>): boolean {
    const [, remaining] = find_if_n(f, n, p);
    return remaining === 0;
}

function __none_n_usage() {
    const even = predicate(x => (x & 1) === 0);
    const d = sequence([1, 3, 5, 8]);
    const result = none_n(begin(d), 3, even);
    print("None of the first three elements are even: " + result);
}

function __none_n_attributes() {
}
