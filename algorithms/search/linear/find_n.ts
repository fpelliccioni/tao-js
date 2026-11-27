// Reference: Elements of Programming, ch. 6, pp. 98–99 (adapted using find_if_n).

function find_n<I extends Iter<unknown>>(
    f: I, n: number, x: ValueOf<I>,
): [I, number] {
    return find_if_n(f, n, value => value === x);
}

function __find_n_usage() {
    const d = sequence([3, 7, 11, 7, 13]);
    const [result, remaining] = find_n(begin(d), size(d), 7);

    if (remaining === 0) print("No matching element.");
    else print("Found " + source(result) + " with " + remaining + " elements remaining.");
}

function __find_n_attributes() {
}
