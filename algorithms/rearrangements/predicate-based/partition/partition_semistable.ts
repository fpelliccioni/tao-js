// Reference: Elements of Programming, ch. 11, p. 191, exercise 11.3.

// Doc (es): Reordena [f, l) para que los elementos que dan false con p queden primero, conservando su orden relativo. Requiere un rango válido de iteradores de avance mutables. Devuelve el primer iterador del grupo true, o l si todos dan false.
// Doc (en): Reorders [f, l) so elements for which p is false come first, preserving their relative order. Requires a valid range of mutable forward iterators. Returns the first iterator of the true group, or l if all elements give false.
function partition_semistable<I extends MutableForwardIterator>(
    f: I, l: NoInfer<I>, p: Predicate<ValueOf<I>>,
): I {
    pre(() => is_bounded_range(f, l), "The iterators must delimit a valid range.");
    let original!: Map<ValueOf<I>, number>;
    pre(() => {
        original = range_value_counts(f, l);
        return true;
    });

    let point = find_if(f, l, p);
    if (!equal(point, l)) {
        let current = successor(point);
        while (!equal(current, l)) {
            if (!p(source(current))) {
                exchange_values(point, current);
                point = successor(point);
            }
            current = successor(current);
        }
    }

    post(() => partitioned_at_point(f, point, l, p), "The result must separate false and true elements.");
    post(() => has_range_value_counts(f, l, original), "The output must be a permutation of the input.");
    return point;
}

function __partition_semistable_usage() {
    const d = seq([2, 7, 4, 1, 6, 3]);
    const f = begin(d);
    const point = partition_semistable(f, end(d), even);
    const index = distance(f, point);
    print("Partition starts at index: " + index);
}

function __partition_semistable_attributes() {
}
