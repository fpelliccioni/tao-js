// Reference: Elements of Programming, ch. 11, p. 191, exercise 11.5.

// Doc (es): Particiona un rango no vacío con n − 1 evaluaciones de p durante el algoritmo. Conserva el orden de los elementos que fallan p.
// Doc (en): Partitions a nonempty range with n − 1 calls to p in the algorithm. Preserves the order of elements failing p.
function partition_semistable_nonempty<I extends MutableForwardIterator>(
    f: I, l: NoInfer<I>, p: Predicate<ValueOf<I>>,
): void {
    pre(() => is_bounded_range(f, l), "The iterators must delimit a valid range.");
    pre(() => !equal(f, l), "The range must not be empty.");
    let original!: Map<ValueOf<I>, number>;
    pre(() => {
        original = range_value_counts(f, l);
        return true;
    });

    let point = f;
    let current = f;
    let next = successor(current);
    while (!equal(next, l)) {
        if (!p(source(current))) {
            if (!equal(point, current)) exchange_values(point, current);
            point = successor(point);
        }
        current = next;
        next = successor(current);
    }

    // Either value can occupy the first position of the true group.
    if (!equal(point, current)) exchange_values(point, current);

    post(() => partitioned(f, l, p), "False elements must precede true elements.");
    post(() => has_range_value_counts(f, l, original), "The output must be a permutation of the input.");
}

function __partition_semistable_nonempty_usage() {
    const d = seq([2, 7, 4, 1, 6, 3]);
    const f = begin(d);
    partition_semistable_nonempty(f, end(d), even);
    print(d);
}

function __partition_semistable_nonempty_attributes() {
}
