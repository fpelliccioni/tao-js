// Reference: Elements of Programming, ch. 6, p. 100.

function find_adjacent_mismatch<I extends Iter<unknown>>(
    f: I, l: I, r: Relation<ValueOf<I>>,
): I {
    if (equal(f, l)) return l;

    let previous = source(f);
    f = successor(f);
    while (!equal(f, l)) {
        const current = source(f);
        if (!r(previous, current)) return f;
        previous = current;
        f = successor(f);
    }
    return l;
}

function __find_adjacent_mismatch_usage() {
    const d = sequence([1, 4, 3, 8], "d", undefined, "stream");
    const result = find_adjacent_mismatch(begin(d), end(d), lt);

    if (equal(result, end(d))) print("All adjacent pairs are strictly increasing.");
    else print("First element that breaks the ordering: " + source(result));
}

function __find_adjacent_mismatch_attributes() {
}
