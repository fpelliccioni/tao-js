// Reference: Elements of Programming, ch. 6, p. 100.

// Doc (es): Devuelve el segundo iterador del primer par adyacente que falla r. Si todos los pares cumplen r, devuelve l.
// Doc (en): Returns the second iterator of the first adjacent pair that fails r. Returns l if every pair satisfies r.
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
    const d = seq([1, 4, 3, 8], "d", undefined, "stream");
    const result = find_adjacent_mismatch(begin(d), end(d), lt);

    if (equal(result, end(d))) {
        print("All adjacent pairs are strictly increasing.");
    } else {
        const value = source(result);
        print("First element that breaks the ordering: " + value);
    }
}

function __find_adjacent_mismatch_attributes() {
}
