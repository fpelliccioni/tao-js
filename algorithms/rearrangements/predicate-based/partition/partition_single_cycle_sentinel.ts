// Reference: Elements of Programming, ch. 11, p. 192, exercise 11.9 (counted misplaced pairs).

// Doc (es): Usa el número de pares mal ubicados para garantizar que cada búsqueda sin chequeo de fin alcance un centinela. Mueve esos elementos en un solo ciclo.
// Doc (en): Counts misplaced pairs so every unguarded search is guaranteed to reach a sentinel. Moves the misplaced elements in one cycle.
function partition_single_cycle_sentinel<I extends MutableBidirectionalIterator>(
    f: I, l: NoInfer<I>, p: Predicate<ValueOf<I>>,
): I {
    pre(() => is_bounded_range(f, l), "The iterators must delimit a valid range.");
    let original!: Map<ValueOf<I>, number>;
    pre(() => {
        original = range_value_counts(f, l);
        return true;
    });

    const point = potential_partition_point(f, l, p);
    let remaining = count_if(f, point, p);
    if (remaining > 0) {
        let first = find_if_unguarded(f, p);
        let last = l;
        const saved = source(first);
        while (remaining > 0) {
            last = find_backward_if_not_unguarded(last, p);
            sink(first, source(last));
            --remaining;
            if (remaining === 0) {
                sink(last, saved);
            } else {
                first = find_if_unguarded(successor(first), p);
                sink(last, source(first));
            }
        }
    }

    post(() => partitioned_at_point(f, point, l, p), "The result must separate false and true elements.");
    post(() => has_range_value_counts(f, l, original), "The output must be a permutation of the input.");
    return point;
}

function __partition_single_cycle_sentinel_usage() {
    const d = sequence([2, 7, 4, 1, 6, 3]);
    const f = begin(d);
    const point = partition_single_cycle_sentinel(f, end(d), even);
    const index = distance(f, point);
    print("Partition starts at index: " + index);
}

function __partition_single_cycle_sentinel_attributes() {
}
