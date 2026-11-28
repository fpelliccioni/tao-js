// Reference: Elements of Programming, ch. 11, p. 201.

// Doc (es): Ordena de forma estable los primeros n elementos usando un búfer con espacio para la mitad del rango, redondeada hacia arriba.
// Doc (en): Stably sorts the first n elements using a buffer large enough for half the range, rounded up.
function sort_n_with_buffer<I extends MutableForwardIterator, B extends MutableForwardIterator<ValueOf<I>>>(
    f: I, n: number, buffer: B, r: Relation<ValueOf<I>>,
): I {
    // Precondition: r is a strict weak ordering.
    pre(() => Number.isSafeInteger(n) && n >= 0,
        "Lengths must be nonnegative safe integers.");
    const capacity = Math.ceil(n / 2);
    let expected!: ValueOf<I>[];
    pre(() => {
        const last = successor(f, n);
        successor(buffer, capacity);
        expected = stable_sort_snapshot(f, last, r);
        return true;
    }, "The input and buffer must have enough elements.");
    pre(() => disjoint_counted_ranges(f, n, buffer, capacity), "The buffer must not overlap the input.");

    function sort(first: I, count: number): I {
        if (count < 2) return successor(first, count);
        const half = Math.floor(count / 2);
        const middle = sort(first, half);
        sort(middle, count - half);
        return merge_n_with_buffer(first, half, middle, count - half, buffer, r);
    }

    const result = sort(f, n);
    post(() => equal(result, successor(f, n)), "The result must be the end of the sorted range.");
    post(() => range_matches_snapshot(f, result, expected), "The sort must preserve the order of equivalent elements.");
    return result;
}

function __sort_n_with_buffer_usage() {
    const d = seq([5, 2, 1, 3, 2, 4, 1], "d", undefined, "sll");
    const buffer = seq([0, 0, 0, 0]);
    sort_n_with_buffer(begin(d), size(d), begin(buffer), lt);
    print(d);
}

function __sort_n_with_buffer_attributes() {
}
