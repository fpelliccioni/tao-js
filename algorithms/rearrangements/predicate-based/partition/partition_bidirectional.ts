// Reference: Elements of Programming, ch. 11, pp. 191–192.

// Doc (es): Reordena [f, l) con los elementos que fallan p primero. Devuelve el inicio del grupo que cumple p.
// Doc (en): Reorders [f, l) with the elements that fail p first. Returns the start of the group that satisfies p.
function partition_bidirectional<I extends MutableBidirectionalIterator>(
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
    while (true) {
        first = find_if(first, last, p);
        last = find_backward_if(first, last, misses);
        if (equal(first, last)) break;
        last = predecessor(last);
        exchange_values(first, last);
        first = successor(first);
    }

    post(() => is_bounded_range(f, first) && is_bounded_range(first, l), "The partition point must belong to the range.");
    post(() => partitioned_at_point(f, first, l, p), "The result must separate false and true elements.");
    post(() => has_range_value_counts(f, l, original), "The output must be a permutation of the input.");
    return first;
}

function __partition_bidirectional_usage() {
    const d = seq([2, 7, 4, 1, 6, 3]);
    const f = begin(d);
    const point = partition_bidirectional(f, end(d), even);
    const index = distance(f, point);
    print("Partition starts at index: " + index);
}

function __partition_bidirectional_attributes() {
}
