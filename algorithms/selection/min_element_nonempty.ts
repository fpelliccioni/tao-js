function min_element_nonempty<T>(f: Iter<T>, l: Iter<T>, r: Relation<T>) {
    let m = f;
    f = successor(f);

    while ( ! equal(f, l)) {
        if (r(source(f), source(m))) {
            m = f;
        }
        f = successor(f);
    }
    return m;
}

function __min_element_nonempty_usage() {
    const s = sequence(array_random(), "s");
    const l = end(s);

    const m = min_element_nonempty(begin(s), l, lt);
    if ( ! equal(m, l)) {
        const minimum = source(m);
        print("The min element is: " + minimum);
    }
}

function __min_element_nonempty_attributes() {
    return {
        class: ['Selection'],
        complexity: 'n - 1 comparisons',
        "type requirements": ['f, l: I: Iterator \u2227 Readable',
                              'r: R: StrictWeakOrdering relation',
                              'Domain(R) = ValueType(I)'],
        precondition: 'readable_bounded_range(f, l) \u2227 f != l',
        postcondition: 'source(m) = sort_stable_copy(f, l, r)[0]',
        other: ['Stable'],
    };
}
