// Reference: Elements of Programming, ch. 11, p. 199, exercise 11.13.

// Doc (es): Particiona de forma estable los primeros n elementos mediante reducción balanceada. Usa el espacio disponible en el búfer y devuelve el punto de partición y el fin del rango.
// Doc (en): Stably partitions the first n elements mediante reducción balanceada. Uses the available buffer and returns the partition point and range end.
function partition_stable_n_iterative<I extends MutableForwardIterator, B extends MutableForwardIterator<ValueOf<I>>>(
    f: I, n: number, buffer: B, capacity: number, p: Predicate<ValueOf<I>>,
): [I, I] {
    pre(
        () => Number.isSafeInteger(n) && n >= 0 && Number.isSafeInteger(capacity) && capacity >= 0,
        "The length and buffer capacity must be nonnegative safe integers.",
    );
    let expected!: ValueOf<I>[];
    pre(() => {
        const last = successor(f, n);
        successor(buffer, capacity);
        expected = stable_partition_snapshot(f, last, p);
        return true;
    }, "The input and buffer must have enough elements.");
    pre(() => disjoint_counted_ranges(f, n, buffer, capacity), "The input and buffer must not overlap.");

    function leaf(first: I, count: number): PartitionBlock<I> {
        if (count === 0) return { point: first, last: first };
        const last = successor(first, count);
        const point = count === 1
            ? (p(source(first)) ? first : last)
            : partition_buffered_block(first, last, buffer, p);
        return { point, last };
    }

    function* blocks() {
        let first = f;
        let remaining = n;
        while (remaining > 0) {
            const width = Math.min(remaining, Math.max(1, capacity));
            const block = leaf(first, width);
            yield block;
            first = block.last;
            remaining -= width;
        }
    }

    const combine = (left: PartitionBlock<I> | null, right: PartitionBlock<I> | null) =>
        left && right ? combine_partition_blocks(left, right) : left ?? right;
    const result = reduce_balanced_iterable(blocks(), combine, null) ?? { point: f, last: f };
    post(() => equal(result.last, successor(f, n)), "The result must include the end of the counted range.");
    post(() => is_bounded_range(f, result.point) && is_bounded_range(result.point, result.last),
        "The partition point must belong to the range.");
    post(() => partitioned_at_point(f, result.point, result.last, p), "The point must separate false and true elements.");
    post(() => range_matches_snapshot(f, result.last, expected), "The order of each group must be preserved.");
    return [result.point, result.last];
}

function __partition_stable_n_iterative_usage() {
    const d = seq([2, 7, 4, 1, 6, 3, 5], "d", undefined, "sll");
    const buffer = seq([0, 0, 0]);
    const f = begin(d);
    const [point] = partition_stable_n_iterative(f, size(d), begin(buffer), size(buffer), even);
    const index = distance(f, point);
    print("Partition starts at index: " + index);
    print(d);
}

function __partition_stable_n_iterative_attributes() {
}
