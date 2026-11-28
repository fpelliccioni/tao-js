// Reference: From Mathematics to Generic Programming, ch. 10, §10.8 (ch10.h).

// Doc (es): Devuelve la primera posición cuyo valor no es menor que el buscado.
// Doc (en): Returns the first position whose value is not less than the search key.
function lower_bound<I extends ForwardIterator>(f: I, l: I, a: ValueOf<I>, r: Relation<ValueOf<I>>): I {
    // The delegated search checks the partition and the returned boundary.
    return partition_point(f, l, (x: ValueOf<I>) => r(x, a));
}

function __lower_bound_usage() {
    const d = seq([1, 4, 4, 4, 8]);
    const [f, l] = rng(d);
    const result = lower_bound(f, l, 4, lt);
    const index = distance(f, result);
    print("Boundary index: " + index);
}

function __lower_bound_attributes() {
}
