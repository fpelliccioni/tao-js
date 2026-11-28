// Reference: Elements of Programming, ch. 11, pp. 190–191 (variant of partition_semistable).

function partition_semistable_1<T>(f: Iter<T>, l: Iter<T>, p: Predicate<T>) {
    f = find_if(f, l, p);
    if (f == l) return f;

    let j = f;
    j = successor(j)

    while ( ! equal(j, l)) {
        if ( ! p(source(j))) {
            iter_swap(f, j);
            f = successor(f);
        }
        j = successor(j);
    }
    return f;
}

function __partition_semistable_1_usage() {
    const d = seq(array_random(), "d", even, undefined, true);
    const f = begin(d);
    const l = end(d);

    const p = partition_semistable_1(f, l, even);
    if ( ! equal(p, l)) {
        const partitionValue = source(p);
        print('partition point: ' + partitionValue);
    }
}

function __partition_semistable_1_attributes() {
}
