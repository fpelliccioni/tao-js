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
    const d = seq(array_random(), even);
    const [f, l] = rng(d);

    const p = partition_stable_forward(f, l, even);
    if ( ! equal(p, l)) {
        const partitionValue = source(p);
        print('partition point: ' + partitionValue);
    }

}

function __partition_stable_forward_attributes() {
}
