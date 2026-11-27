// Reference: Elements of Programming, ch. 6, p. 99, exercise 6.3.

// Doc (es): Comprueba si todos los elementos cumplen p entre los primeros n desde f.
// Doc (en): Checks whether every element satisfies p among the first n from f.
function all_n<I extends Iter<unknown>>(f: I, n: number, p: Predicate<ValueOf<I>>): boolean {
    const [, remaining] = find_if_not_n(f, n, p);
    return remaining === 0;
}

function __all_n_usage() {
    const d = sequence([2, 4, 6, 7]);
    const result = all_n(begin(d), 3, even);
    print("All of the first three elements are even: " + result);
}

function __all_n_attributes() {
}
