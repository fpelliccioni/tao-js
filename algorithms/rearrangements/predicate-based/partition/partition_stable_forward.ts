function partition_stable_forward<T>(f: Iter<T>, l: Iter<T>, p: Predicate<T>) {
    while (true) {
        if (equal(f, l)) return f;
        if (p(source(f))) break;
        f = successor(f);
    }

    let j = f;
    j = successor(j)

    while ( ! equal(j, l)) {
        if ( ! p(source(j))) {
            rotate_bidirectional(f, j, successor(j));     //TODO: refine rotate_bidirectional(...)
            f = successor(f);
        }
        j = successor(j);
    }
    return f;
}

function __partition_stable_forward_usage() {
    const even = predicate((x: number) => (x & 1) === 0);
    const d = sequence(array_random(), "d", even);
    const f = begin(d);
    const l = end(d);

    const p = partition_stable_forward(f, l, even);
    if ( ! equal(p, l)) {
        print('partition point: ' + source(p));
    }

}

function __partition_stable_forward_attributes() {
}
