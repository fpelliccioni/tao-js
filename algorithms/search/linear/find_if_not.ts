// Reference: Elements of Programming, ch. 6, p. 95 (described in the text; implementation in eop.h).

function find_if_not<I extends Iter<unknown>>(f: I, l: I, p: Predicate<ValueOf<I>>): I {
    while (!equal(f, l) && p(source(f))) {
        f = successor(f);
    }
    return f;
}

function __find_if_not_usage() {
    const d = sequence([2, 4, 7, 8]);
    const l = end(d);
    const result = find_if_not(begin(d), l, even);

    if (equal(result, l)) {
        print("No matching element.");
    } else {
        const value = source(result);
        print("First element that is not even: " + value);
    }
}

function __find_if_not_attributes() {
}
