function min_element(f, l, r) {
    if (equal(f, l)) return l;

    var m = f;
    f = successor(f);

    while ( ! equal(f, l)) {
        if (r(source(f), source(m))) {
            m = f;
        }
        f = successor(f);
    }
    return m;
}

function usage() {
    var d = sequence(array_random(), "d");

    var f = begin(d);
    var l = end(d);
    
    f = min_element(f, l, lt);
    if ( ! equal(f, l)) {
        print("The min element is: " + source(f));
    }    
}

function attributes() {
    return {
        class: ['Selection'],
        complexity: 'n - 1 comparisons',
        "type requirements": ['f, l: I: Iterator \u2227 Readable',
                              'r: R: StrictWeakOrdering relation',
                              'Domain(R) = ValueType(I)'],
        precondition: 'readable_bounded_range(f, l)',
        postcondition: 'source(m) = stable_sort_copy(f, l, r)[0]',
        other: ['Stable'],
    };
}