// Reference: Elements of Programming, ch. 11, p. 192, exercise 11.6 (companion implementation in eop.h).

// Doc (es): Calcula el punto de partición y luego intercambia únicamente los elementos que quedaron del lado incorrecto. Requiere iteradores de avance mutables.
// Doc (en): Computes the partition point, then swaps only elements on the wrong side. Requires mutable forward iterators.
function partition_forward<I extends MutableForwardIterator>(
    f: I, l: NoInfer<I>, p: Predicate<ValueOf<I>>,
): I {
    pre(() => is_bounded_range(f, l), "The iterators must delimit a valid range.");
    let original!: Map<ValueOf<I>, number>;
    pre(() => {
        original = range_value_counts(f, l);
        return true;
    });

    const point = potential_partition_point(f, l, p);
    let first = f;
    let next = find_if_not(point, l, p);
    while (!equal(next, l)) {
        first = find_if_unguarded(first, p);
        exchange_values(first, next);
        first = successor(first);
        next = find_if_not(successor(next), l, p);
    }

    post(() => is_bounded_range(f, point) && is_bounded_range(point, l), "The partition point must belong to the range.");
    post(() => partitioned_at_point(f, point, l, p), "The result must separate false and true elements.");
    post(() => has_range_value_counts(f, l, original), "The output must be a permutation of the input.");
    return point;
}

function __partition_forward_usage() {
    const d = seq([2, 7, 4, 1, 6, 3], "d", undefined, "sll");
    const f = begin(d);
    const point = partition_forward(f, end(d), even);
    const index = distance(f, point);
    print("Partition starts at index: " + index);
}

function __partition_forward_attributes() {
}
