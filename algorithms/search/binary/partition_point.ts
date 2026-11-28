// Reference: From Mathematics to Generic Programming, ch. 10, §10.8 (ch10.h).

// Doc (es): Devuelve la primera posición que no satisface el predicado.
// Doc (en): Returns the first position that fails the predicate.
function partition_point<I extends ForwardIterator>(f: I, l: I, p: Predicate<ValueOf<I>>): I {
    pre(() => is_bounded_range(f, l), "The iterators must delimit a valid range.");
    const n = distance(f, l);
    const fails = (x: ValueOf<I>) => !p(x);
    pre(() => is_partitioned_n(f, n, fails), "The predicate must be true before it is false.");
    const result = partition_point_n(f, n, fails);
    post(() => all(f, result, p), "Every element before the result must satisfy the predicate.");
    post(() => none(result, l, p), "No element from the result onward may satisfy the predicate.");
    return result;
}

function __partition_point_usage() {
    const d = seq([2, 4, 6, 7, 9]);
    const [f, l] = rng(d);
    const result = partition_point(f, l, even);
    const index = distance(f, result);
    print("Boundary index: " + index);
}

function __partition_point_attributes() {
}
