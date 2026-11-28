// Reference: Elements of Programming, ch. 11, pp. 201–204 (adapted).

// Doc (es): Combina dos rangos ordenados contiguos de forma estable. Rota subrangos cuando el búfer es pequeño.
// Doc (en): Stably merges two adjacent sorted ranges. Rotates subranges when the buffer is small.
function merge_n_adaptive<I extends MutableForwardIterator, B extends MutableForwardIterator<ValueOf<I>>>(
    f0: I, n0: number, f1: I, n1: number, buffer: B, capacity: number, r: Relation<ValueOf<I>>,
): I {
    // Precondition: r is a strict weak ordering.
    pre(() => [n0, n1, capacity].every(n => Number.isSafeInteger(n) && n >= 0),
        "Lengths must be nonnegative safe integers.");
    pre(() => equal(successor(f0, n0), f1), "The two ranges must be adjacent.");
    let expected!: ValueOf<I>[];
    pre(() => {
        const last = successor(f1, n1);
        successor(buffer, capacity);
        if (!is_sorted_range(f0, f1, r) || !is_sorted_range(f1, last, r)) return false;
        expected = stable_sort_snapshot(f0, last, r);
        return true;
    }, "Both ranges must be sorted and the buffer must have enough space.");
    pre(() => disjoint_counted_ranges(f0, n0 + n1, buffer, capacity), "The buffer must not overlap the input.");

    function merge(first: I, left: number, middle: I, right: number): I {
        if (left === 0 || right === 0) return successor(middle, right);
        if (left <= capacity) return merge_n_with_buffer(first, left, middle, right, buffer, r);
        if (left === 1 && right === 1) {
            if (r(source(middle), source(first))) iter_swap(first, middle);
            return successor(middle);
        }

        let leftCut: I;
        let rightCut: I;
        if (left > right) {
            leftCut = successor(first, Math.floor(left / 2));
            const pivot = source(leftCut);
            rightCut = lower_bound_n(middle, right, pivot, r);
        } else {
            rightCut = successor(middle, Math.floor(right / 2));
            const pivot = source(rightCut);
            leftCut = upper_bound_n(first, left, pivot, r);
        }
        const leftPrefix = distance(first, leftCut);
        const rightPrefix = distance(middle, rightCut);
        const newMiddle = rotate_forward_range(leftCut, middle, rightCut);
        merge(first, leftPrefix, leftCut, rightPrefix);
        return merge(newMiddle, left - leftPrefix, rightCut, right - rightPrefix);
    }

    const result = merge(f0, n0, f1, n1);
    post(() => equal(result, successor(f0, n0 + n1)), "The result must be the end of the merged range.");
    post(() => range_matches_snapshot(f0, result, expected), "The merge must preserve the order of equivalent elements.");
    return result;
}

function __merge_n_adaptive_usage() {
    const d = seq([1, 3, 5, 2, 3, 4]);
    const buffer = seq([0]);
    const f = begin(d);
    const m = successor(f, 3);
    merge_n_adaptive(f, 3, m, 3, begin(buffer), size(buffer), lt);
    print(d);
}

function __merge_n_adaptive_attributes() {
}
