// Reference: Elements of Programming, ch. 11, p. 191, exercise 11.3.

// Doc (es): Particiona [f, l) conservando el orden de los elementos que fallan p. Devuelve la primera posición del grupo que cumple p.
// Doc (en): Partitions [f, l) while preserving the order of elements failing p. Returns the start of the group satisfying p.
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
    const d = sequence([2, 7, 4, 1, 6, 3]);
    const f = begin(d);
    const point = partition_semistable(f, end(d), even);
    const index = distance(f, point);
    print("Partition starts at index: " + index);
}

function __partition_semistable_attributes() {
}
