// Reference: Elements of Programming, ch. 11, pp. 190–191 (variant of partition_semistable).

function partition_semistable_nonempty<T>(f: Iter<T>, l: Iter<T>, p: Predicate<T>) {
    //precondition: nonempty: ! equal(f, l)
    while ( ! p(source(f))) {
        f = successor(f);
        if (equal(f, l)) return;
    }

    let j = f;
    j = successor(j)
    if (equal(j, l)) return;

    while ( ! equal(successor(j), l)) {
        if ( ! p(source(j))) {
            iter_swap(f, j);
            f = successor(f);
        }
        j = successor(j);
    }
    iter_swap(f, j);
}

function __partition_semistable_nonempty_usage() {
    const even = predicate<number>(x => (x & 1) === 0);
    const d = sequence(array_random(), "d", even, undefined, true);
    const f = begin(d);
    const l = end(d);

    partition_semistable_nonempty(f, l, even);

}

function __partition_semistable_nonempty_attributes() {
}
