// Reference: Elements of Programming, ch. 6, p. 99, exercise 6.3.

function find_not_n<I extends Iter<unknown>>(
    f: I, n: number, x: ValueOf<I>,
): [I, number] {
    return find_if_n(f, n, value => value !== x);
}

function __find_not_n_usage() {
    const d = sequence([7, 7, 11, 7]);
    const [result, remaining] = find_not_n(begin(d), 3, 7);
    if (remaining === 0) {
        print("The first three elements are all 7.");
    } else {
        const value = source(result);
        print("First differing element: " + value);
    }
}

function __find_not_n_attributes() {
}
