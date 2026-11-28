// Reference: Elements of Programming, ch. 6, pp. 98–99 (adapted using find_if_n).

// Doc (es): Busca x en los primeros n elementos desde f. Devuelve la posición y la cantidad restante, que es cero si x está ausente.
// Doc (en): Finds x among the first n elements from f. Returns the position and remaining count, which is zero if x is absent.
function find_n<I extends Iter<unknown>>(
    f: I, n: number, x: ValueOf<I>,
): [I, number] {
    return find_if_n(f, n, value => value === x);
}

function __find_n_usage() {
    const d = seq([3, 7, 11, 7, 13]);
    const [result, remaining] = find_n(begin(d), size(d), 7);

    if (remaining === 0) {
        print("No matching element.");
    } else {
        const value = source(result);
        print("Found " + value + " with " + remaining + " elements remaining.");
    }
}

function __find_n_attributes() {
}
