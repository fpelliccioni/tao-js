// Reference: Elements of Programming, ch. 6, p. 104 (variant of partition_point_n that also returns a count).

function partition_point_n_forward<T>(f: Iter<T>, n: number, p: Predicate<T>): [Iter<T>, number] {
    let t = n;
    while (n != 0) {
        const h = half(n);
        const m = successor(f, h);

        if (p(source(m))) {
            n = h;
        } else {
            n -= h + 1;
            t -= h + 1;
            f = successor(m);
        }
    }
    return [f, t];
}

function __partition_point_n_forward_usage() {
    const eq3 = predicate(x => x == 3);
    const gt3 = predicate(x => x > 3);
    const gte3 = predicate(x => x >= 3);

    const d = seq([1, 1, 1, 1, 3, 3, 3, 3, 3, 7, 8, 9], eq3);

    const lb = partition_point_n_forward(begin(d), size(d), gte3);
    const ub = partition_point_n_forward(lb[0], lb[1], gt3);

    let f = lb[0];
    const l = ub[0];

    while ( ! equal(f, l)) {
        const partitionValue = source(f);
        print(partitionValue + ", ");
        f = successor(f);
    }
}

function __partition_point_n_forward_attributes() {
}
