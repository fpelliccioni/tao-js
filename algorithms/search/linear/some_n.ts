// Reference: Elements of Programming, ch. 6, p. 99, exercise 6.3.

// Doc (es): Comprueba si al menos un elemento cumple p entre los primeros n desde f.
// Doc (en): Checks whether at least one element satisfies p among the first n from f.
function some_n<I extends Iter<unknown>>(f: I, n: number, p: Predicate<ValueOf<I>>): boolean {
    return !none_n(f, n, p);
}

function __some_n_usage() {
    const d = seq([1, 4, 5, 7]);
    const result = some_n(begin(d), 3, even);
    print("At least one of the first three elements is even: " + result);
}

function __some_n_attributes() {
}
