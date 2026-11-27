// Reference: From Mathematics to Generic Programming, ch. 10, p. 191 (ch10.h).

function find_if_n<I extends Iter<unknown>>(
    f: I, n: number, p: Predicate<ValueOf<I>>,
): [I, number] {
    pre(() => Number.isSafeInteger(n) && n >= 0, "The count must be a nonnegative safe integer.");

    while (n !== 0 && !p(source(f))) {
        f = successor(f);
        --n;
    }
    return [f, n];
}

function __find_if_n_usage() {
    const even = predicate(x => (x & 1) === 0);
    const d = sequence([1, 3, 8, 5, 6]);
    const [result, remaining] = find_if_n(begin(d), size(d), even);

    if (remaining === 0) {
        print("No matching element.");
    } else {
        const value = source(result);
        print("Found " + value + " with " + remaining + " elements remaining.");
    }
}

function __find_if_n_attributes() {
}
