// Reference: Elements of Programming, ch. 10, pp. 181–182 (rotate_forward_nontrivial).

// Doc (es): Rota dos grupos no vacíos mediante pasadas con iteradores de avance.
// Doc (en): Rotates two nonempty blocks by making passes with forward iterators.
function rotate_forward<I extends MutableForwardIterator>(f: I, m: I, l: I): I {
    pre(() => is_bounded_range(f, m) && is_bounded_range(m, l)
        && !equal(f, m) && !equal(m, l), "Both parts must be nonempty and belong to the same range.");
    let expected!: ValueOf<I>[];
    pre(() => {
        expected = range_snapshot(m, l).concat(range_snapshot(f, m));
        return true;
    });
    const [result, middle] = rotate_forward_step(f, m, l);
    let first = result;
    let next = middle;
    while (!equal(next, l)) {
        [first, next] = rotate_forward_step(first, next, l);
    }
    post(() => equal(result, successor(f, distance(m, l))), "The result must mark the end of the moved suffix.");
    post(() => range_matches_snapshot(f, l, expected), "The suffix must precede the original prefix.");
    return result;
}

function __rotate_forward_usage() {
    const d = seq([1, 2, 3, 4, 5], "d", undefined, "sll");
    const [f, l] = rng(d);
    const m = successor(f, 2);
    rotate_forward(f, m, l);
    print(d);
}

function __rotate_forward_attributes() {
}
