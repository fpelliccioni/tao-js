// Reference: Elements of Programming, ch. 11, p. 189, exercise 11.1 (companion implementation in eop.h).

function partitioned_at_point<T>(f: Iter<T>, m: Iter<T>, l: Iter<T>, p: Predicate<T>) {
    // precondition: readable_bounded_range(f, l) && m belongs to [f, l)
    const c0 = none(f, m, p);
    const c1 = all(m, l, p);
    return c0 && c1;
}

function __partitioned_at_point_usage() {
    const d = seq(array_random(), "d", even, undefined, true);
    const f = begin(d);
    const l = end(d);
    const m = successor(f, 5);

    if (partitioned_at_point(f, m, l, even)) {
        print('The sequence is already p-partitioned at m.');
    } else {
        print('The sequence is not p-partitioned at m, partitioning...');

        const m2 = partition_semistable(f, l, even);

        if (partitioned_at_point(f, m2, l, even)) {
            print('Now the sequence is p-partitioned at m2.');
        } else {
            print('Impossible, this line will never be executed.');
        }
    }
}

function __partitioned_at_point_attributes() {
}
