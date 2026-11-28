// Reference: Elements of Programming, ch. 10, p. 181.

// Doc (es): Ejecuta una pasada de la rotación y devuelve las posiciones actualizadas del inicio y el punto medio.
// Doc (en): Performs one pass of a forward rotation and returns the updated start and middle positions.
function rotate_forward_step<I extends MutableForwardIterator>(f: I, m: I, l: I): [I, I] {
    pre(() => is_bounded_range(f, m) && is_bounded_range(m, l)
        && !equal(f, m) && !equal(m, l), "Both parts must be nonempty and belong to the same range.");
    const start = f;
    let expected!: ValueOf<I>[];
    let middleIndex = 0;
    let completed = 0;
    pre(() => {
        expected = range_snapshot(f, l);
        middleIndex = distance(f, m);
        for (let i = middleIndex; i < expected.length; ++i) {
            [expected[completed], expected[i]] = [expected[i], expected[completed]];
            if (++completed === middleIndex) middleIndex = i + 1;
        }
        return true;
    });

    let c = m;
    do {
        exchange_values(f, c);
        f = successor(f);
        c = successor(c);
        if (equal(f, m)) m = c;
    } while (!equal(c, l));

    post(() => equal(f, successor(start, completed)) && equal(m, successor(start, middleIndex)),
        "The result must identify the updated start and middle.");
    post(() => range_matches_snapshot(start, l, expected), "The range must reflect the swaps of one pass.");
    return [f, m];
}

function __rotate_forward_step_usage() {
    const d = seq([1, 2, 3, 4, 5], "d", undefined, "sll");
    const [f, l] = rng(d);
    const m = successor(f, 2);
    const [first, middle] = rotate_forward_step(f, m, l);
    const firstIndex = distance(f, first);
    const middleIndex = distance(f, middle);
    print("Next positions: " + firstIndex + ", " + middleIndex);
    print(d);
}

function __rotate_forward_step_attributes() {
}
