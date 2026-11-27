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
    const even = predicate<number>(x => (x & 1) === 0);
    const d = sequence(array_random(), "d", even, undefined, true);
    const f = begin(d);
    const l = end(d);

    const p = partition_semistable_1(f, l, even);
    if ( ! equal(p, l)) {
        print('partition point: ' + source(p));
    }
}

function __partition_semistable_1_attributes() {
}
