// Reference: Elements of Programming, ch. 10, pp. 184–185 (forward variant).
// Reference: From Mathematics to Generic Programming, ch. 11, §11.3 (forward variant) (ch11.h).

// Doc (es): Rota un rango de avance y devuelve la nueva posición del primer elemento original.
// Doc (en): Rotates a forward range and returns the new position of the original first element.
function rotate<I extends MutableForwardIterator>(f: I, m: I, l: I): I {
    let expected!: ValueOf<I>[];
    pre(() => {
        if (!is_bounded_range(f, m) || !is_bounded_range(m, l)) return false;
        expected = range_snapshot(m, l).concat(range_snapshot(f, m));
        return true;
    }, "The middle must lie within the range.");
    const result = rotate_forward_range(f, m, l);
    post(() => equal(result, successor(f, distance(m, l))), "The result must mark the new position of the original first element.");
    post(() => range_matches_snapshot(f, l, expected), "The suffix must precede the original prefix.");
    return result;
}

function __rotate_usage() {
    const d = seq([1, 2, 3, 4, 5], "d", undefined, "sll");
    const [f, l] = rng(d);
    const m = successor(f, 2);
    rotate(f, m, l);
    print(d);
}

function __rotate_attributes() {
}
