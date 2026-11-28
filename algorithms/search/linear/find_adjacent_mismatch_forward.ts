// Reference: Elements of Programming, ch. 6, p. 103.

// Doc (es): Devuelve el segundo iterador del primer par adyacente que falla r, o l si no lo hay. Esta variante requiere iteradores de avance multipasada.
// Doc (en): Returns the second iterator of the first adjacent pair that fails r, or l if none does. This variant requires multipass forward iterators.
function find_adjacent_mismatch_forward<I extends ForwardIterator>(
    f: I, l: I, r: Relation<ValueOf<I>>,
): I {
    if (equal(f, l)) return l;

    let previous = f;
    f = successor(f);
    while (!equal(f, l) && r(source(previous), source(f))) {
        previous = f;
        f = successor(f);
    }
    return f;
}

function __find_adjacent_mismatch_forward_usage() {
    const d = seq([1, 4, 3, 8], "d", undefined, "sll");
    const result = find_adjacent_mismatch_forward(begin(d), end(d), lt);

    if (equal(result, end(d))) {
        print("All adjacent pairs are strictly increasing.");
    } else {
        const value = source(result);
        print("First element that breaks the ordering: " + value);
    }
}

function __find_adjacent_mismatch_forward_attributes() {
}
