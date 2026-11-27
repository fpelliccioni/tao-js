// Reference: Elements of Programming, ch. 6, pp. 94–95.
// Reference: From Mathematics to Generic Programming, ch. 10, pp. 190–191 (ch10.h).

function find_if<I extends Iter<unknown>>(f: I, l: I, p: Predicate<ValueOf<I>>): I {
    while (!equal(f, l) && !p(source(f))) {
        f = successor(f);
    }
    return f;
}

function __find_if_usage() {
    const d = sequence([1, 3, 8, 5, 6]);
    const l = end(d);
    const result = find_if(begin(d), l, even);

    if (equal(result, l)) {
        print("No matching element.");
    } else {
        const value = source(result);
        print("First even element: " + value);
    }
}

function __find_if_attributes() {
}
