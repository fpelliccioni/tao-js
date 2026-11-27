// Reference: Elements of Programming, ch. 11, p. 192, exercise 11.8 (companion implementation in eop.h).

// Doc (es): Particiona [f, l) de forma bidireccional. Usa elementos intercambiados como centinelas para las búsquedas internas.
// Doc (en): Partitions [f, l) bidirectionally. Uses swapped elements as sentinels for the inner searches.
function partition_sentinel<I extends MutableBidirectionalIterator>(
    f: I, l: NoInfer<I>, p: Predicate<ValueOf<I>>,
): I {
    pre(() => is_bounded_range(f, l), "The iterators must delimit a valid range.");
    let original!: Map<ValueOf<I>, number>;
    pre(() => {
        original = range_value_counts(f, l);
        return true;
    });

    const misses = (value: ValueOf<I>) => !p(value);
    let first = f;
    let last: I = l;
    first = find_if(first, last, p);
    last = find_backward_if(first, last, misses);
    if (!equal(first, last)) {
        // The first exchange puts one sentinel on each side.
        last = predecessor(last);
        exchange_values(first, last);
        first = successor(first);

        while (true) {
            first = find_if_unguarded(first, p);
            last = find_backward_if_not_unguarded(last, p);
            if (equal(successor(last), first)) break;
            exchange_values(first, last);
            first = successor(first);
        }
    }

    post(() => is_bounded_range(f, first) && is_bounded_range(first, l), "The partition point must belong to the range.");
    post(() => partitioned_at_point(f, first, l, p), "The result must separate false and true elements.");
    post(() => has_range_value_counts(f, l, original), "The output must be a permutation of the input.");
    return first;
}

function __partition_sentinel_usage() {
    const d = sequence([2, 7, 4, 1, 6, 3]);
    const f = begin(d);
    const point = partition_sentinel(f, end(d), even);
    const index = distance(f, point);
    print("Partition starts at index: " + index);
}

function __partition_sentinel_attributes() {
}
