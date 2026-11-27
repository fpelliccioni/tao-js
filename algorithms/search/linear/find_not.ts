// Reference: Elements of Programming, ch. 6, p. 94 (companion implementation in eop.h).

function find_not<I extends Iter<unknown>>(f: I, l: I, x: ValueOf<I>): I {
    while (!equal(f, l) && source(f) === x) {
        f = successor(f);
    }
    return f;
}

function __find_not_usage() {
    const d = sequence([7, 7, 11, 7]);
    const result = find_not(begin(d), end(d), 7);

    if (equal(result, end(d))) {
        print("No differing element.");
    } else {
        const value = source(result);
        print("First differing element: " + value);
    }
}

function __find_not_attributes() {
}
