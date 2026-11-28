// Reference: Elements of Programming, ch. 11, p. 192, exercise 11.7 (bounded searches on either side of the potential partition point).

// Doc (es): Particiona un rango bidireccional moviendo los elementos mal ubicados en un solo ciclo. Devuelve el inicio del grupo que cumple p.
// Doc (en): Partitions a bidirectional range by moving misplaced elements in one cycle. Returns the start of the group that satisfies p.
function partition_single_cycle<I extends MutableBidirectionalIterator>(
    f: I, l: NoInfer<I>, p: Predicate<ValueOf<I>>,
): I {
    pre(() => is_bounded_range(f, l), "The iterators must delimit a valid range.");
    let original!: Map<ValueOf<I>, number>;
    pre(() => {
        original = range_value_counts(f, l);
        return true;
    });

    const point = potential_partition_point(f, l, p);
    const misses = (value: ValueOf<I>) => !p(value);
    let first = find_if(f, point, p);
    let last: I = l;
    if (!equal(first, point)) {
        const saved = source(first);
        while (true) {
            last = predecessor(find_backward_if(point, last, misses));
            sink(first, source(last));
            first = find_if(successor(first), point, p);
            if (equal(first, point)) {
                sink(last, saved);
                break;
            }
            sink(last, source(first));
        }
    }

    post(() => is_bounded_range(f, point) && is_bounded_range(point, l), "The partition point must belong to the range.");
    post(() => partitioned_at_point(f, point, l, p), "The result must separate false and true elements.");
    post(() => has_range_value_counts(f, l, original), "The output must be a permutation of the input.");
    return point;
}

function __partition_single_cycle_usage() {
    const d = seq([2, 7, 4, 1, 6, 3]);
    const f = begin(d);
    const point = partition_single_cycle(f, end(d), even);
    const index = distance(f, point);
    print("Partition starts at index: " + index);
}

function __partition_single_cycle_attributes() {
}
