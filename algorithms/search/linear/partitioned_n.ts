// Reference: Elements of Programming, ch. 6, p. 102, exercise 6.6.

// Doc (es): Comprueba que, en los primeros n elementos desde f, todos los que fallan p aparezcan antes de los que lo cumplen.
// Doc (en): Checks that every element that fails p comes before those that satisfy it among the first n elements from f.
function partitioned_n<I extends Iter<unknown>>(f: I, n: number, p: Predicate<ValueOf<I>>): boolean {
    const [middle, remaining] = find_if_n(f, n, p);
    if (remaining === 0) return true;

    const [, untested] = find_if_n(successor(middle), remaining - 1, value => !p(value));
    return untested === 0;
}

function __partitioned_n_usage() {
    const d = sequence([1, 3, 2, 4, 7]);
    const prefix = partitioned_n(begin(d), 4, even);
    const full = partitioned_n(begin(d), size(d), even);
    print("First four elements are partitioned: " + prefix);
    print("Full range is partitioned: " + full);
}

function __partitioned_n_attributes() {
}
