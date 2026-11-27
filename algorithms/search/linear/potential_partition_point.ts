function potential_partition_point<T>(f: Iter<T>, l: Iter<T>, p: Predicate<T>) {
    const res = count_if_not_basis(f, l, p, f);
    return res;
}

function __potential_partition_point_usage() {
    const even = predicate<number>(x => (x & 1) === 0);
    const d = sequence(array_random(), "d", even);
    const f = begin(d);
    const l = end(d);
    const m = potential_partition_point(f, l, even);

    print("After p-partitioning the partition point would ocurr here:");
    print(distance(begin(d), m));
    print(source(m));

    print("Let's verify...");
    const p = partition_semistable(f, l, even);
    if (equal(m, p)) {
        print("Yeah!");
    } else {
        print('Impossible, this line will never be executed.');
    }
}

function __potential_partition_point_attributes() {
}
