function max_element(f, l, r) {
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

function __max_element_usage() {
    var s = sequence(array_random(), "s");

    var l = end(s);
    
    var m = max_element(begin(s), l, lt);
    if ( ! equal(m, l)) {
        print("The max element is: " + source(m));
    } else {
        print("An empty sequence has no max element");
    }
}

function __max_element_attributes() {
    return {
        class: ['Selection'],
        complexity: 'n - 1 comparisons',
        "type requirements": ['f, l: I: Iterator \u2227 Readable',
                              'r: R: StrictWeakOrdering relation',
                              'Domain(R) = ValueType(I)'],
        precondition: 'readable_bounded_range(f, l)',
        postcondition: 'source(m) = sort_stable_copy(f, l, r)[0]',
        other: ['Stable'],
    };
}

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

function __min_element_usage() {
    var s = sequence(array_random(), "s");
    var l = end(s);
    
    var m = min_element(begin(s), l, lt);
    if ( ! equal(m, l)) {
        print("The min element is: " + source(f));
    } else {
        print("An empty sequence has no min element");
    }
}

function __min_element_attributes() {
    return {
        class: ['Selection'],
        complexity: 'n - 1 comparisons',
        "type requirements": ['f, l: I: Iterator \u2227 Readable',
                              'r: R: StrictWeakOrdering relation',
                              'Domain(R) = ValueType(I)'],
        precondition: 'readable_bounded_range(f, l)',
        postcondition: 'source(m) = sort_stable_copy(f, l, r)[0]',
        other: ['Stable'],
    };
}

function min_element_nonempty(f, l, r) {
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

function __min_element_nonempty_usage() {
    var s = sequence(array_random(), "s");
    var l = end(s);
    
    var m = min_element_nonempty(begin(s), l, lt);
    if ( ! equal(m, l)) {
        print("The min element is: " + source(f));
    }
}

function __min_element_nonempty_attributes() {
    return {
        class: ['Selection'],
        complexity: 'n - 1 comparisons',
        "type requirements": ['f, l: I: Iterator \u2227 Readable',
                              'r: R: StrictWeakOrdering relation',
                              'Domain(R) = ValueType(I)'],
        precondition: 
`readable_bounded_range(f, l)
\u2227 f != l
`,
        postcondition: 'source(m) = sort_stable_copy(f, l, r)[0]',
        other: ['Stable'],
    };
}

