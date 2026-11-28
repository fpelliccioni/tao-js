// Reference: Elements of Programming, ch. 11, p. 200.

// Doc (es): Combina dos rangos ordenados contiguos de forma estable copiando el primero al búfer.
// Doc (en): Stably merges two adjacent sorted ranges by copying the first into a buffer.
function merge_n_with_buffer<I extends MutableForwardIterator, B extends MutableForwardIterator<ValueOf<I>>>(
    f0: I, n0: number, f1: I, n1: number, buffer: B, r: Relation<ValueOf<I>>,
): I {
    // Precondition: r is a strict weak ordering.
    pre(() => [n0, n1].every(n => Number.isSafeInteger(n) && n >= 0),
        "Lengths must be nonnegative safe integers.");
    pre(() => equal(successor(f0, n0), f1), "The two ranges must be adjacent.");
    let expected!: ValueOf<I>[];
    pre(() => {
        const last = successor(f1, n1);
        successor(buffer, n0);
        if (!is_sorted_range(f0, f1, r) || !is_sorted_range(f1, last, r)) return false;
        expected = stable_sort_snapshot(f0, last, r);
        return true;
    }, "Both ranges must be sorted and the buffer must have enough space.");
    pre(() => disjoint_counted_ranges(f0, n0 + n1, buffer, n0), "The buffer must not overlap the input.");

    copy_n(f0, n0, buffer);
    const [, , result] = combine_copy_n(buffer, n0, f1, n1, f0, relation_source(r));
    post(() => equal(result, successor(f0, n0 + n1)), "The result must be the end of the merged range.");
    post(() => range_matches_snapshot(f0, result, expected), "The merge must preserve the order of equivalent elements.");
    return result;
}

function __merge_n_with_buffer_usage() {
    const d = seq([1, 3, 5, 2, 3, 4]);
    const buffer = seq([0, 0, 0]);
    const f = begin(d);
    const m = successor(f, 3);
    merge_n_with_buffer(f, 3, m, 3, begin(buffer), lt);
    print(d);
}

function __merge_n_with_buffer_attributes() {
}
