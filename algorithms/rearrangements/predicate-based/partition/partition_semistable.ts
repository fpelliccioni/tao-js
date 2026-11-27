// Reference: Elements of Programming, ch. 11, p. 190.

function partition_semistable<T>(f: Iter<T>, l: Iter<T>, p: Predicate<T>) {
    while (true) {
        if (equal(f, l)) return f;
        if (p(source(f))) break;
        f = successor(f);
    }

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

function __partition_semistable_usage() {
    const even = predicate((x: number) => (x & 1) === 0);
    const d = sequence(array_random(), "d", even, undefined, true);
    const f = begin(d);
    const l = end(d);

    const p = partition_semistable(f, l, even);
    if ( ! equal(p, l)) {
        print('partition point: ' + source(p));
    }

}

function __partition_semistable_attributes() {
}
