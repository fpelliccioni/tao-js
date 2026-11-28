// Reference: From Mathematics to Generic Programming, ch. 10, §10.8 (ch10.h).

// Doc (es): Devuelve la primera posición cuyo valor es mayor que el buscado.
// Doc (en): Returns the first position whose value is greater than the search key.
function upper_bound<I extends ForwardIterator>(f: I, l: I, a: ValueOf<I>, r: Relation<ValueOf<I>>): I {
    // The delegated search checks the partition and the returned boundary.
    return partition_point(f, l, (x: ValueOf<I>) => !r(a, x));
}

function __upper_bound_usage() {
    const d = seq([1, 4, 4, 4, 8]);
    const [f, l] = rng(d);
    const result = upper_bound(f, l, 4, lt);
    const index = distance(f, result);
    print("Boundary index: " + index);
}

function __upper_bound_attributes() {
}
